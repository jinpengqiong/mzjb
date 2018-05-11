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

    }
};
