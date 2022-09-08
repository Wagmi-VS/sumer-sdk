import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";
import { ProviderError } from "./Errors/ProviderError";
import { Notify } from "./Notify";


export const applyProxy = async (target: any, thisArg: any, argumentsList: any, address: string) => {
    try {
        const res = await Reflect.apply(target, thisArg, argumentsList);
        return res
    } catch (error: any) {
        if (!error.DappSonar) {
            console.log(address)
            const providerError = new ProviderError(error.message, error.code, address)
            Notify.error(providerError)
            error.DappSonar = true
        }
        throw error

    }
}

export class ProxyProvider {

    constructor(_provider: ExternalProvider | JsonRpcFetchFunc | any) {
        const handler = {
            get: function (target: any, prop: any, _receiver: any) {
                const response = target[prop];
                if (typeof target[prop] === 'function') {

                    return new Proxy(response, { apply: async (target: any, thisArg: any, argumentsList: any) => applyProxy(target, thisArg, argumentsList, _provider.selectedAddress) });
                } else {
                    return response
                }
            },
            apply: async (target: any, thisArg: any, argumentsList: any) => {

                return applyProxy(target, thisArg, argumentsList, _provider.selectedAddress)
            }
        };
        return new Proxy(_provider, handler)
    }
    [key: string]: any;

}