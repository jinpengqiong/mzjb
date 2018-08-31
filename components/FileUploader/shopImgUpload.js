import React from 'react';
import { Button, message } from 'antd';
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
            fileList: [],
            uploading: false,
            fileUrls: [],
            upload_confirming: false,
            data: {},
            value: 1
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
        let self = this;
        var uploader = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: 'selectfiles',
            container: document.getElementById('container'),
            flash_swf_url: '../../utils/Moxie.swf',
            silverlight_xap_url: '../../utils/Moxie.xap',
            filters : {
                max_file_size : '5mb',
                mime_types: [
                    {title : "Image files", extensions : "jpg,gif,png,bmp"},
                ]
            },
            init: {
                PostInit: function() {
                    document.getElementById('ossfile').innerHTML = '';
                    document.getElementById('postfiles').onclick = function() {
                        self.set_upload_param(uploader, '', false);
                        return false;
                    };
                },

                FilesAdded: function(up, files) {
                    plupload.each(files, function(file) {
                        document.getElementById('ossfile').innerHTML +=
                            `<div id=${file.id}>
                ${file.name} ${plupload.formatSize(file.size)}
                <b></b>
            </div>`;
                    });
                },

                BeforeUpload: function(up, file) {
                    self.set_upload_param(up, file.name, true);
                },

                UploadProgress: function(up, file) {
                    var d = document.getElementById(file.id);
                    d.getElementsByTagName('b')[0].innerHTML =
                        `<span>${file.percent}% 完成上传</span>`;
                },

                FileUploaded: function(up, file, info) {
                    if (info.status == 200){
                        const url = self.state.data.host + '/' + file._options.multipart_params.key;
                        self.props.store.getMainImage(url);
                        Request.GraphQlRequest(createMediaID, { shopId:localStorage.getItem('shopID'), type:'PIC', url}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                            (res) => {
                                message.success('上传成功');
                            }
                        ).catch(err => Request.token_auth(err))
                    }
                },
                Error: function(up, err) {
                    message.error('出错了！'+err.response);
                }
            }
        });
        uploader.init();
    }


    render() {
        return (
            <div>
                <div id="ossfile"></div>
                <div id="container">
                    <Button id="selectfiles" href="javascript:void(0);" style={{ marginRight: "10px"}}>选择文件</Button>
                    <Button id="postfiles" href="javascript:void(0);" >开始上传</Button>
                </div>
            </div>
        );
    }
}

export default ShopImgUploader;
