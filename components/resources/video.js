import React from 'react';
import { inject, observer } from 'mobx-react'
import VideoList from './videoList'


@inject('store') @observer
class MyVideo extends React.Component {
    
    render() {
        return (
        <div>
            <VideoList />
        </div>
        );
    }
}

export default MyVideo;
