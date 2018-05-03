import uri from "./uri";
import { GraphQLClient } from 'graphql-request';

module.exports = {
    // GraphQl request
    GraphQlRequest( action, variables, localStorage){
        const client = new GraphQLClient(uri, {
            headers: {
                Authorization: localStorage,
            },
        });
        return client.request(action, variables)

    }
};
