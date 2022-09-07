export declare class ContractError extends Error {
    addressOrName: string;
    name: string;
    args: [];
    constructor(addressOrName: string, name: string, args: []);
    toString(): string;
}
