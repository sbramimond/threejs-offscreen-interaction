interface RequestOption<T> {
    url: string;
    // biome-ignore lint: axios 默认就是用这个
    baseURL?: string;
    method?: string;
    headers?: Record<string, string>;
    timeout?: number;
    withCredentials?: boolean;
    responseType?: string;
    responseEncoding?: string;
    maxRedirects?: number;
    paramsSerializer?: (params: Record<string, string>) => string;
    data?: T;
    params?: T;
}

interface RequestConfig<T> {
    query?: T;
    "x-silent"?: boolean;
    "x-message"?: boolean;
}
interface Api<U, T> {
    [u: string]: (...args: any[]) => Promise<Record>;
}
