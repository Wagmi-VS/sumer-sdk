export declare class ContractError extends Error {
    addressOrName: string;
    name: string;
    address: string;
    args: [];
    constructor(addressOrName: string, name: string, args: [], address: any);
    toString(): string;
}
