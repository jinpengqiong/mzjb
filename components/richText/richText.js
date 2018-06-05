import ReactQuill from 'react-quill';

export default class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            editorHtml: '',
            modules: {
                toolbar: [
                    [{'header': '1'}, {'header': '2'}, {'font': []}],
                    [{size: []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'},
                        {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image', 'video'],
                    ['clean']
                ],
                clipboard: {
                    // toggle to add extra line breaks when pasting HTML:
                    matchVisual: false,
                },
            },
            formats: [
                'header', 'font', 'size',
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                'list', 'bullet', 'indent',
                'link', 'image', 'video'
            ]
            }
        }

    componentDidMount(){
        if(typeof window !== 'undefined'){
            require('react-quill/dist/quill.snow.css');
        }
    }

    handleChange = (html) => {
        this.setState({ editorHtml: html });
    }

    render (){
        console.log(this.state.editorHtml)
        return (
            <div>
                <ReactQuill
                    theme='snow'
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={this.state.modules}
                    formats={this.state.formats}
                    bounds={'.app'}
                    placeholder='在这里编辑商品详情哦。。。'
                />
            </div>
        )
    }
}