import { ContractError } from "./Errors/ContractError";
import { ProviderError } from "./Errors/ProviderError";
export declare class Notify {
    static error(msg: ContractError | ProviderError): void;
}
