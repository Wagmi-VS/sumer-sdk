import { BaseError } from "./BaseError";
import { eipError, findEipError } from "./eip";

export class ProviderError extends BaseError {
    address: string
    eip: eipError
    constructor(message: string, code: any, address: string) {
        super(message, code);
        this.address = address
        this.eip = findEipError(code)

    }
    toString() {
        if (this.eip) {
            return `[${this.code}] ${this.eip.description}`
        }
        return `[${this.code}] ${this.message}`
    }
}