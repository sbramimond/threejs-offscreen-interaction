import host from './host';

const ROOT_URL = `https://${host}`;

export let post = {
    logout: `${ROOT_URL}/logout`,
};

export let get = {
    getGen: `${ROOT_URL}/v1/api/supervise/genQR`,
};
