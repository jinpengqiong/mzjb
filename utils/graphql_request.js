import uri from "./uri";
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
    }
};
