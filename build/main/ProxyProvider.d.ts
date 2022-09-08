import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";
export declare const applyProxy: (target: any, thisArg: any, argumentsList: any) => Promise<any>;
export declare class ProxyProvider {
    constructor(_provider: ExternalProvider | JsonRpcFetchFunc | any);
    [key: string]: any;
}
