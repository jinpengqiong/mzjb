import React from 'react';
import { message, Button } from 'antd';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';
import Request from '../../utils/graphql_request';

const createMediaAndUploadYouzan = `
  mutation ($shopId: Int!, $type: MediaType!, $url: String!, $name: String) {
    createMediaAndUploadYouzan(shopId:$shopId, type:$type, url: $url, name: $name){
      imageId
      id
    }
  }
`;


@inject('store') @observer
class YouzanUploader extends React.Component {
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
      browse_button: 'selectfiles3',
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
          document.getElementById('ossfile3').innerHTML = '';
          document.getElementById('postfiles3').onclick = function() {
            self.set_upload_param(uploader, '', false);
                return false;
          };
        },
    
        FilesAdded: function(up, files) {
          plupload.each(files, function(file) {
            document.getElementById('ossfile3').innerHTML +=
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
          if (info.status === 200){
              const shopId = localStorage.getItem('shopID');
              const url = self.state.data.host + '/' + file._options.multipart_params.key;
              Request.GraphQlRequest(createMediaAndUploadYouzan, { shopId, type:'PIC', url}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                (res) => {
                    console.log('res',res)
                    self.props.store.getMainImage(url);
                    const imageId = res.createMediaAndUploadYouzan.imageId;
                    self.props.store.getimageId(imageId);
                    message.success('上传成功！');
                    // document.getElementById('ossfile').innerHTML = '';
                  }
              ).catch(()=>{message.error('上传失败，请联系管理员！')})
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
        <div id="ossfile3"></div>
        <br/>
        <div id="container">
            <Button id="selectfiles3" href="javascript:void(0);" style={{ marginRight: "10px"}}>选择文件</Button>
            <Button id="postfiles3" href="javascript:void(0);" >开始上传</Button>
        </div>
      </div>
              );
            }
}

export default YouzanUploader;
