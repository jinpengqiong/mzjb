import React from 'react'
import BraftEditor from 'braft-editor';
import { inject, observer } from 'mobx-react'
import Request from "../../utils/graphql_request";
import 'braft-editor/dist/braft.css'

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

@inject('store') @observer
export default class RichText extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:null
        }
    }
    componentDidMount(){
        this.getOSSPolicy()
    }

    getOSSPolicy() {
        Request.GraphQlRequest(queryossPolicy, {label:"user", type:"pic"}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            res => {
                // console.log('oss', res)
                this.setState({
                    data: res.ossPolicy,
                })
            }
        ).catch(err => Request.token_auth(err))
    }

    validateFn = (file) => {
        return file.size < 1024 * 500
    }

    onInsert = (files) => {
        // 只插入前3个媒体对象
        return files.slice(0, 3)
    }

    uploadFn = (param) => {
            const serverURL = this.state.data.host;
            const xhr = new XMLHttpRequest;
            const fd = new FormData();
            const key = this.state.data.dir + '/' + param.file.name;
            fd.append('key', key );
            fd.append('OSSAccessKeyId', this.state.data.accessid);
            fd.append('policy', this.state.data.policy);
            fd.append('signature', this.state.data.signature);
            fd.append('success_action_status', '200');
            const successFn = response => {
                param.success({
                    url: serverURL + '/' + key,
                })
            }

            const progressFn = (event) => {
                // 上传进度发生变化时调用param.progress
                param.progress(event.loaded / event.total * 100)
            }

            const errorFn = (response) => {
                // 上传发生错误时调用param.error
                param.error({
                    msg: '上传出错，请联系管理员！'
                })
            }

            xhr.upload.addEventListener("progress", progressFn, false)
            xhr.addEventListener("load", successFn, false)
            xhr.addEventListener("error", errorFn, false)
            xhr.addEventListener("abort", errorFn, false)
            fd.append('file', param.file)
            xhr.open('POST', serverURL, true)
            xhr.send(fd)
    }

    render () {
        const editorProps = {
            height: 180,
            contentFormat: 'html',
            initialContent: this.props.store.richTextContent,
            onChange: this.handleChange,
            placeholder: '请在此编辑...',
            media:
                {
                    allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
                    image: true, // 开启图片插入功能
                    video: false, // 开启视频插入功能
                    audio: false, // 开启音频插入功能
                    validateFn: this.validateFn, // 指定本地校验函数，说明见下文
                    uploadFn: this.uploadFn, // 指定上传函数，说明见下文
                    removeConfirmFn: null, // 指定删除前的确认函数，说明见下文
                    onRemove: null, // 指定媒体库文件被删除时的回调，参数为被删除的媒体文件列表(数组)
                    onChange: null, // 指定媒体库文件列表发生变化时的回调，参数为媒体库文件列表(数组)
                    onInsert: this.onInsert, // 指定从媒体库插入文件到编辑器时的回调，参数为被插入的媒体文件列表(数组)
                }
        }

        return (
            <div className="demo">
                <BraftEditor {...editorProps}/>
            </div>
        )

    }

    handleChange = (content) => {
        // console.log(content);
        this.props.store.getRichTextContent(content)
    }

}