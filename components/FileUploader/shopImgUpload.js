import React from 'react';
import { Button, message, Icon } from 'antd';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';
import Request from '../../utils/graphql_request';

const createMediaID = `
  mutation ($shopId: Int!, $type: MediaType!, $url: String!) {
    createMedia(shopId:$shopId, type:$type, url: $url){
      id
    }
  }
`;

@inject('store') @observer
class ShopImgUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading: false,
            data: {},
            value: 1,
        }
    }
    componentDidMount() {
        this.getOSSPolicy();
        this.getUploaded();
    }

    getOSSPolicy() {
        const queryossPolicy = `
      query ($label: String, $type: String!){
        ossPolicy(label: $label, type: $type){
            dir
            accessid
            policy
            signature
            host
            filename
            }
        }
      `;
        Request.GraphQlRequest(queryossPolicy, {label:"user", type:"pic"}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                // console.log('oss', res)
                this.setState({
                    data: res.ossPolicy,
                })
            }
        ).catch(err => Request.token_auth(err))
    }

    get_suffix(filename) {
        const pos = filename.lastIndexOf('.');
        let suffix = '';
        if (pos !== -1) {
            suffix = filename.substring(pos)
        }
        return suffix;
    }

    set_upload_param(up, filename, ret){
        let new_multipart_params = {
            'key' : this.state.data.dir + '/' + UUIDGen.uuid(8,10) + this.get_suffix(filename),
            'policy': this.state.data.policy,
            'OSSAccessKeyId': this.state.data.accessid,
            'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
            'signature': this.state.data.signature,
        };

        up.setOption({
            'url': this.state.data.host,
            'multipart_params': new_multipart_params
        });

        up.start();
    }

    getUploaded() {
        var self = this;
        var uploader = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: 'selectFiles',
            container: document.getElementById('container'),
            flash_swf_url: '../../utils/Moxie.swf',
            silverlight_xap_url: '../../utils/Moxie.xap',
            filters : {
                max_file_size : '5mb',
                mime_types: [
                    {title : "Image files", extensions : "jpg,jpeg,gif,png,bmp"},
                ]
            },
            init: {
                PostInit: function() {
                },

                FilesAdded: function(up, files) {
                  // console.log('files', files)
                    plupload.each(files, function(file) {
                    self.set_upload_param(up, file.name, true);
                    });
                },

                BeforeUpload: function(up, file) {
                },

                UploadProgress: function(up, file) {

                },

                FileUploaded: function(up, file, info) {
                    if (info.status === 200){
                        const url = self.state.data.host + '/' + file._options.multipart_params.key;

                        Request.GraphQlRequest(createMediaID, { shopId:localStorage.getItem('shopID'), type:'PIC', url}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                            res => {
                                self.props.store.getMainImage(url);
                                message.success('上传成功');
                            }
                        ).catch(err => Request.token_auth(err))
                    }
                },
                Error: function(up, err) {
                    console.log(err)
                    message.error('出错了！'+err);
                }
            }
        });
        uploader.init();
    }


    render() {
        return (
                <div id="container">
                     <div id='selectFiles'>
                       {
                         this.props.store.mainImage?
                             <img src={this.props.store.mainImage} alt="#" style={{ width:'120px'}}/>
                             :
                             <Button  href="javascript:void(0);" style={{ marginRight: "10px"}}>
                               <Icon type="upload" />上传文件
                             </Button>
                       }
                     </div>
                </div>
        );
    }
}

export default ShopImgUploader;
