import React, { PureComponent, Component } from 'react';

export default class NoticePreview extends (PureComponent || Component) {
    render() {
        const { value } = this.props;

        return (
            <div className="rc-design-component-notice-preview">{value}</div>
        );
    }
}