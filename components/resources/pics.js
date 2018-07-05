import React from 'react';
import { inject, observer } from 'mobx-react'
import PicList from './picList'

@inject('store') @observer
class MyPICS extends React.Component {
    render() {
        return (
            <div>
                <PicList />
            </div>
        );
    }
}

export default MyPICS;
