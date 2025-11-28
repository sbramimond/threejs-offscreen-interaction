import host from './host';
export default function request(url = '/', method = 'GET', payload = {}, config = {}) {
    let option: RequestOption = {
        url,
        // biome-ignore lint: 调试阶段需要
        baseURL: host,
        method,
        headers: {},
        timeout: 10 * 1000,
        withCredentials: false,
        responseType: 'json',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        // paramsSerializer: function paramsSerializer(params) {
        //     return JSON.stringify(params);
        // },
        'x-silent': false,
        'x-message': false,
    };

    if (method === 'GET') {
        option.params = payload;
    } else if (method === 'POST') {
        option.params = config.params || {};
        option.data = payload;
    } else {
        option.data = payload;
    }

    return {...option, ...config};
}
