export declare class ContractError extends Error {
    addressOrName: string;
    name: string;
    address: string;
    args: Array<any>;
    constructor(addressOrName: string, name: string, args: Array<any>, address: string);
    toString(): string;
}
