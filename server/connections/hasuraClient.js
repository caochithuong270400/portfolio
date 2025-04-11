import fetchGQL from 'graphql-client';
import dotenv from 'dotenv';

dotenv.config(); // Load biến môi trường từ file .env

const HASURA_ENDPOINT = process.env.HASURA_ENDPOINT;
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

const client = new fetchGQL({
    url: HASURA_ENDPOINT,
    headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': HASURA_ADMIN_SECRET
    }
})

if (client) {
    console.log('connect thành công');
    console.log(process.env.HASURA_ENDPOINT);
    // console.log(client.query[Function]);
} else {
    console.log('chưa connect được');
}

export default client;
