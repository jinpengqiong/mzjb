import React from 'react';
import { message, Button } from 'antd';
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
export default class ModuleUploader extends React.Component {
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
        );
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
                // PostInit: function() {
                //     document.getElementById('ossfile').innerHTML = '';
                //     document.getElementById('postfiles').onclick = function() {
                //         self.set_upload_param(uploader, '', false);
                //         return false;
                //     };
                // },

                FilesAdded: function(up, files) {
                    self.set_upload_param(up, files[0].name, true);
                },

                FileUploaded: function(up, file, info) {
                    if (info.status == 200){
                        const url = self.state.data.host + '/' + file._options.multipart_params.key;
                        self.props.onImageChange(url)
                        Request.GraphQlRequest(createMediaID, { shopId:localStorage.getItem('shopID'), type:'PIC', url}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                            (res) => {
                                message.success('上传成功');
                            }
                        )
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
                <br/>
                <div id="container" style={{ marginBottom: "15px"}}>
                    <div id="selectfiles">
                        <b>+</b>添加一个广告
                    </div>
                </div>
            </div>
        );
    }
}