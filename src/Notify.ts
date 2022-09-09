import { ContractError } from "./Errors/ContractError"
import { ProviderError } from "./Errors/ProviderError"

export class Notify {

    static error(msg: ContractError | ProviderError) {
        if (process.env.NODE_ENV !== 'test') {

            const log = {
                message: msg.toString(),
                timestamp: Date.now(),
                wallet: msg.address,
            }
            console.error(log)
        }
    }
}