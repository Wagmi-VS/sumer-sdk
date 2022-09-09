import { eipError } from "./eip";
export declare class ProviderError extends Error {
    message: string;
    code: number;
    address: string;
    eip: eipError;
    constructor(message: string, code: number, address: string);
    toString(): string;
}
