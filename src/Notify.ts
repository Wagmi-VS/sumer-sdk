import { ContractError } from "./Errors/ContractError"
import { ProviderError } from "./Errors/ProviderError"
import Bowser from "bowser";
export class Notify {

    private static meta() {
        if (window?.navigator?.userAgent) {
            return Bowser.parse(window.navigator.userAgent)
        }

        return {}
    }
    static error(msg: ContractError | ProviderError) {

        if (process.env.NODE_ENV !== 'test') {

            const log = {
                message: msg.toString(),
                timestamp: Date.now(),
                wallet: msg.address,
                meta: this.meta()
            }
            console.error(log)
        }
    }
}