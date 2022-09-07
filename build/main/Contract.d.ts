import { Fragment, JsonFragment } from "@ethersproject/abi";
import { BaseContract, Signer } from "ethers";
export declare class Contract {
    baseContract: BaseContract;
    constructor(addressOrName: string, contractInterface: ReadonlyArray<Fragment | JsonFragment>, signerOrProvider?: Signer);
    [key: string]: any;
}
