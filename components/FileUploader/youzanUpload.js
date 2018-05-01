import React from 'react';
const RadioGroup = Radio.Group;
import { Radio, Progress, message } from 'antd';
import { inject, observer } from 'mobx-react'
import UUIDGen from '../../utils/uuid_generator.js';
import uri from '../../utils/uri';

import { GraphQLClient } from 'graphql-request'
const createMediaID = `
  mutation ($shopId: Int!, $type: MediaType!, $url: String!) {
    createMedia(shopId:$shopId, type:$type, url: $url){
      id
    }
  }
`;

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
    const client = new GraphQLClient(uri, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    
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
      client.request(queryossPolicy, {label:"user", type:"pic"}).then(
        res => {
          console.log('oss', res)
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
      browse_button: 'selectfiles1',
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
          document.getElementById('ossfile1').innerHTML = '';
          document.getElementById('postfiles1').onclick = function() {
            self.set_upload_param(uploader, '', false);
                return false;
          };
        },
    
        FilesAdded: function(up, files) {
          plupload.each(files, function(file) {
            document.getElementById('ossfile1').innerHTML += 
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
              const client = new GraphQLClient(uri, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
              })
              const shopId = parseInt(self.props.store.shopID);
              const url = self.state.data.host + '/' + file._options.multipart_params.key;
              client.request(createMediaAndUploadYouzan,{ shopId, type:'PIC', url}).then(
                (res) => {
                  console.log('res',res)
                  if(res.errors){
                    message.error('errors')
                  }else{
                    const imgID = res.createMediaAndUploadYouzan.id;
                    self.props.store.getUrlIDs(parseInt(imgID))
                    const imageId = res.createMediaAndUploadYouzan.imageId;
                    self.props.store.getimageId(imageId);
                    message.success('上传成功！');
                    // document.getElementById('ossfile').innerHTML = '';
                  }
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
        <div id="ossfile1"></div>
        <br/>
        <div id="container">
          <a id="selectfiles1" href="javascript:void(0);" className='btn' style={{ marginRight: "10px"}}>选择文件</a>
          <a id="postfiles1" href="javascript:void(0);" className='btn'>开始上传</a>
        </div>
        <style jsx='true'>{`
          	.btn{
            color: #fff;
            background-color: #1890FF;
            border-color: #2e6da4; 
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            text-decoration: none;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
            }
            a.btn:hover{
                background-color: #40A9FF;
            }
          `}</style>
      </div>
              );
            }
}

export default YouzanUploader;
