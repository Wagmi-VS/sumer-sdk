export class ProviderError extends Error {
    msg: string
    code: number
    constructor(msg: string, code: number) {
        super();
        this.msg = msg
        this.code = code
    }
    toString() {
        return `[${this.code}] ${this.msg} `
    }
}