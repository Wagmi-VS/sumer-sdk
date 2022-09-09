export class ContractError  {
    contractAddress: string
    name: string
    address: string
    args: Array<any>
    reason: string

    constructor(addressOrName: string, name: string, args: Array<any>, address: string,reason:string) {
        this.args = args
        this.name = name
        this.address = address
        this.contractAddress = addressOrName
        this.reason = reason
    }

    toString() {
        return `Error on Contract ${this.contractAddress} function "${this.name}" with args "${this.args.toString()}. Reason: ${this.reason} "`
    }
}