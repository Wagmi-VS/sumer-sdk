export declare class ProviderError extends Error {
    msg: string;
    code: number;
    constructor(msg: string, code: number);
    toString(): string;
}
