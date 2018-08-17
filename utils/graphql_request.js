import uri from "./uri";
import Router from 'next/router';
import {message } from 'antd';
import { GraphQLClient } from 'graphql-request';

module.exports = {
    // GraphQl request
    GraphQlRequest( action, variables, localStor){
        const client = new GraphQLClient(uri, {
            headers: {
                Authorization: localStor,
            },
        });
        return client.request(action, variables)

    },

    get_suffix(filename) {
        const pos = filename.lastIndexOf('.');
        let suffix = '';
        if (pos !== -1) {
            suffix = filename.substring(pos)
        }
        return suffix;
    },

    token_auth(err) {
        const error = err.toString()
          if(error.indexOf('"code":60013') !== -1){
              console.log('error', error)
              message.error('登录已过期，请重新登录')
              Router.push('/login')
          }
    }
};
