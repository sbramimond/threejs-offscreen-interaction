import Worker from '@/dataLink/socket.worker.ts?worker';

let worker = new Worker();

export default function () {
    worker.postMessage('init');
}
