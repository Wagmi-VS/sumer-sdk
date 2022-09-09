export class ContractError extends Error {
    addressOrName: string
    name: string
    address: string
    args: Array<any>

    constructor(addressOrName: string, name: string, args: Array<any>, address: string) {
        super();
        this.args = args
        this.name = name
        this.address = address
        this.addressOrName = addressOrName
    }

    toString() {
        return `Error on Contract ${this.addressOrName} function "${this.name}" with args "${this.args.toString()}"`
    }
}