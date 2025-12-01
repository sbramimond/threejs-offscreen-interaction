import './socket.d';

import Socket from './socket';
import config from './config';

export default function() {
    let map: Map<symbol, Socket> = new Map();

    for (let [key, value] of Object.entries(config)) {
        let {
            url = '',
            option = {},
            parser = (data: any) => data,
            dataType = 'string',
            threshold = 80
        }: WebsocketPromiseOption = value;

        let socket = new Socket(url, option);

        socket.onMessage.addListener((data: any) => {
            return parser(data, dataType);
        });

        map.set(Symbol(key), socket);
    }


    return map;
}
