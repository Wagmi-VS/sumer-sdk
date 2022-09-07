import { Fragment, JsonFragment } from "@ethersproject/abi";
import { ExternalProvider, JsonRpcFetchFunc, Networkish, Provider, Web3Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { Contract } from "./Contract";


export class DappSonar extends Web3Provider {
  actualAddres: string | undefined

  constructor(_provider: ExternalProvider | JsonRpcFetchFunc, network?: Networkish) {
    super(_provider, network);
    super.listAccounts().then(a => {
      this.actualAddres = a[0]
    });
  }
  [key: string]: any;

  static Contract(addressOrName: string, contractInterface: ReadonlyArray<Fragment | JsonFragment>, signerOrProvider?: Signer | Provider) {
    return new Contract(addressOrName, contractInterface, signerOrProvider)
  }
}