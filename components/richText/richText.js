import React from 'react'
import BraftEditor from 'braft-editor';
import { inject, observer } from 'mobx-react'


@inject('store') @observer
export default class RichText extends React.Component {
    componentDidMount(){
        if(typeof window !== "undefined"){
            require('braft-editor/dist/braft.css');
        }
    }
    render () {
        const editorProps = {
            height: 260,
            contentFormat: 'html',
            initialContent: '<p>Hello World!</p>',
            onChange: this.handleChange,
            media:[

            ]
        }

        return (
            <div className="demo">
                <BraftEditor {...editorProps}/>
            </div>
        )

    }

    handleChange = (content) => {
        console.log(content);
        this.props.store.getRichTextContent(content)
    }

}