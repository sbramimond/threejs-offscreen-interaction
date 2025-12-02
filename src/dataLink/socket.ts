import Socket from 'websocket-as-promised';

export default class Websocket extends Socket {
    constructor(url = '', option?: Record<symbol, any>) {
        if (!url) {
            url = `ws://${location.host}`;
        }

        super(url, option);
    }
}
