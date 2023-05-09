// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 5000, // 5 sec
});
 const get = (url) => instance.get(url);

const post = (url, body) => instance.post(url, body);

module.exports = {
    get,
    post,
}