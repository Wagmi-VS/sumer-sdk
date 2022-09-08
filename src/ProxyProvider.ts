import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";
import { ProviderError } from "./Errors/ProviderError";
import { Notify } from "./Notify";


export const applyProxy = async (target: any, thisArg: any, argumentsList: any) => {
    try {
        const res = await Reflect.apply(target, thisArg, argumentsList);
        return res
    } catch (error: any) {
        if (!error.DappSonar) {
            const providerError = new ProviderError(error.message, error.code)
            Notify.error(providerError.toString())
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
                    return new Proxy(response, { apply: applyProxy });
                } else {
                    return response
                }
            },
            apply: applyProxy
        };
        return new Proxy(_provider, handler)
    }
}