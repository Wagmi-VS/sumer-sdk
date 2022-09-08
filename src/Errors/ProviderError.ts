export class ProviderError extends Error {
    msg: string
    code: number
    address: string

    constructor(msg: string, code: number, address) {
        super(msg);
        this.msg = msg
        this.code = code
        this.address = address
    }
    toString() {
        return `[${this.code}] ${this.msg}`
    }
}