export declare class ProviderError extends Error {
    msg: string;
    code: number;
    address: string;
    constructor(msg: string, code: number, address: any);
    toString(): string;
}
