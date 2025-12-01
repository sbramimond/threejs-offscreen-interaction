declare interface WebsocketPromiseOption {
    url: string;
    option: Record<symbol, any>;
    parser: (threshold, data, dataType) => object;
    dataType: 'string' | 'arraybuffer' | 'blob' | 'json' | 'text';
    threshold: number;
}
