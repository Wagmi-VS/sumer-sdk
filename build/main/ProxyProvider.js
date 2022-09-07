"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyProvider = exports.applyProxy = void 0;
const ProviderError_1 = require("./Errors/ProviderError");
const Notify_1 = require("./Notify");
const applyProxy = async (target, thisArg, argumentsList) => {
    try {
        const res = await Reflect.apply(target, thisArg, argumentsList);
        return res;
    }
    catch (error) {
        if (!error.DappSonar) {
            const providerError = new ProviderError_1.ProviderError(error.message, error.code);
            Notify_1.Notify.error(providerError.toString());
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
                    return new Proxy(response, { apply: exports.applyProxy });
                }
                else {
                    return response;
                }
            },
            apply: exports.applyProxy
        };
        return new Proxy(_provider, handler);
    }
}
exports.ProxyProvider = ProxyProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJveHlQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm94eVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUF1RDtBQUN2RCxxQ0FBa0M7QUFHM0IsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFFLE1BQVcsRUFBRSxPQUFZLEVBQUUsYUFBa0IsRUFBRSxFQUFFO0lBQzlFLElBQUk7UUFDQSxNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNoRSxPQUFPLEdBQUcsQ0FBQTtLQUNiO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDbEIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xFLGVBQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDdEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7U0FDekI7UUFDRCxNQUFNLEtBQUssQ0FBQTtLQUVkO0FBQ0wsQ0FBQyxDQUFBO0FBYlksUUFBQSxVQUFVLGNBYXRCO0FBRUQsTUFBYSxhQUFhO0lBRXRCLFlBQVksU0FBOEM7UUFFdEQsTUFBTSxPQUFPLEdBQUc7WUFDWixHQUFHLEVBQUUsVUFBVSxNQUFXLEVBQUUsSUFBUyxFQUFFLFNBQWM7Z0JBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7b0JBQ3BDLE9BQU8sSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLGtCQUFVLEVBQUUsQ0FBQyxDQUFDO2lCQUNyRDtxQkFBTTtvQkFDSCxPQUFPLFFBQVEsQ0FBQTtpQkFDbEI7WUFDTCxDQUFDO1lBQ0QsS0FBSyxFQUFFLGtCQUFVO1NBQ3BCLENBQUM7UUFDRixPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0NBQ0o7QUFqQkQsc0NBaUJDIn0=