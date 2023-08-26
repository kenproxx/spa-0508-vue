import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `http://spa.2188.info/`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8;text/html',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'X-Powered-By': '3.2.1'
    },
    timeout: 1000,
    withCredentials: false,

})