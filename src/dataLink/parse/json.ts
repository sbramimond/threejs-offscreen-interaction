let time: number = 0;

export default function (threshold: number, _dataType: string = 'string', data: Record<string, any> = {}) {
    if (Date.now() - time < threshold) {
        return;
    }

    time = Date.now();
    console.log('json', data);
    return JSON.parse(JSON.stringify(data));
}
