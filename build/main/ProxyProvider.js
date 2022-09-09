"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyProvider = exports.applyProxy = void 0;
const ProviderError_1 = require("./Errors/ProviderError");
const Notify_1 = require("./Notify");
const applyProxy = async (target, thisArg, argumentsList, address) => {
    try {
        const res = await Reflect.apply(target, thisArg, argumentsList);
        return res;
    }
    catch (error) {
        if (!error.DappSonar) {
            console.log(address);
            const providerError = new ProviderError_1.ProviderError(error.message, error.code, address);
            Notify_1.Notify.error(providerError);
            error.DappSonar = true;
        }
        throw error;
    }
};
exports.applyProxy = applyProxy;
class ProxyProvider {
    constructor(_provider) {
        const handler = {
            get: function (target, prop, _receiver) {
                const response = target[prop];
                if (typeof target[prop] === 'function') {
                    return new Proxy(response, { apply: async (target, thisArg, argumentsList) => (0, exports.applyProxy)(target, thisArg, argumentsList, _provider.selectedAddress) });
                }
                else {
                    return response;
                }
            },
            apply: async (target, thisArg, argumentsList) => {
                return (0, exports.applyProxy)(target, thisArg, argumentsList, _provider.selectedAddress);
            }
        };
        return new Proxy(_provider, handler);
    }
}
exports.ProxyProvider = ProxyProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJveHlQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm94eVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUF1RDtBQUN2RCxxQ0FBa0M7QUFHM0IsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFFLE1BQVcsRUFBRSxPQUFZLEVBQUUsYUFBa0IsRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUMvRixJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDaEUsT0FBTyxHQUFHLENBQUE7S0FDYjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUMzRSxlQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQzNCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1NBQ3pCO1FBQ0QsTUFBTSxLQUFLLENBQUE7S0FFZDtBQUNMLENBQUMsQ0FBQTtBQWRZLFFBQUEsVUFBVSxjQWN0QjtBQUVELE1BQWEsYUFBYTtJQUV0QixZQUFZLFNBQW9EO1FBQzVELE1BQU0sT0FBTyxHQUFHO1lBQ1osR0FBRyxFQUFFLFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxTQUFjO2dCQUNqRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO29CQUVwQyxPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBVyxFQUFFLE9BQVksRUFBRSxhQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFBLGtCQUFVLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDeks7cUJBQU07b0JBQ0gsT0FBTyxRQUFRLENBQUE7aUJBQ2xCO1lBQ0wsQ0FBQztZQUNELEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBVyxFQUFFLE9BQVksRUFBRSxhQUFrQixFQUFFLEVBQUU7Z0JBRTNELE9BQU8sSUFBQSxrQkFBVSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUNoRixDQUFDO1NBQ0osQ0FBQztRQUNGLE9BQU8sSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7Q0FHSjtBQXRCRCxzQ0FzQkMifQ==