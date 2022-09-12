import { ProviderError } from "./Errors/ProviderError";
import { Notify } from "./Notify";
export const applyProxy = async (target, thisArg, argumentsList, address) => {
    try {
        const res = await Reflect.apply(target, thisArg, argumentsList);
        return res;
    }
    catch (error) {
        if (!error.DappSonar) {
            const providerError = new ProviderError(error.message, error.code, address);
            Notify.error(providerError);
            error.DappSonar = true;
        }
        throw error;
    }
};
export class ProxyProvider {
    constructor(_provider) {
        const handler = {
            get: function (target, prop, _receiver) {
                const response = target[prop];
                if (typeof target[prop] === 'function') {
                    return new Proxy(response, { apply: async (target, thisArg, argumentsList) => applyProxy(target, thisArg, argumentsList, _provider.selectedAddress) });
                }
                else {
                    return response;
                }
            },
            apply: async (target, thisArg, argumentsList) => {
                return applyProxy(target, thisArg, argumentsList, _provider.selectedAddress);
            }
        };
        return new Proxy(_provider, handler);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJveHlQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm94eVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xDLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxLQUFLLEVBQUUsTUFBVyxFQUFFLE9BQVksRUFBRSxhQUFrQixFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQy9GLElBQUk7UUFDQSxNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNoRSxPQUFPLEdBQUcsQ0FBQTtLQUNiO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDbEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQzNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDM0IsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7U0FDekI7UUFDRCxNQUFNLEtBQUssQ0FBQTtLQUVkO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsTUFBTSxPQUFPLGFBQWE7SUFFdEIsWUFBWSxTQUFvRDtRQUM1RCxNQUFNLE9BQU8sR0FBRztZQUNaLEdBQUcsRUFBRSxVQUFVLE1BQVcsRUFBRSxJQUFTLEVBQUUsU0FBYztnQkFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtvQkFFcEMsT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQVcsRUFBRSxPQUFZLEVBQUUsYUFBa0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3pLO3FCQUFNO29CQUNILE9BQU8sUUFBUSxDQUFBO2lCQUNsQjtZQUNMLENBQUM7WUFDRCxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQVcsRUFBRSxPQUFZLEVBQUUsYUFBa0IsRUFBRSxFQUFFO2dCQUUzRCxPQUFPLFVBQVUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDaEYsQ0FBQztTQUNKLENBQUM7UUFDRixPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0NBR0oifQ==