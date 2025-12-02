import create from '@/dataLink/create';
import type WebSocketAsPromised from 'websocket-as-promised';

self.onmessage = async () => {
    let socketMap: Map<string, WebSocketAsPromised> = await create();

    socketMap.get('a').sendPacked({a: 1});
};
