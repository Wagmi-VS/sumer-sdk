export class ContractError extends Error {
    addressOrName: string
    name: string
    args: []
    constructor(addressOrName: string, name: string, args: []) {
        super();
        this.args = args
        this.name = name
        this.addressOrName = addressOrName
    }
    toString() {
        return `Error on Contract ${this.addressOrName} function "${this.name}" with args "${this.args.toString()}" `
    }
}