import { Fragment, JsonFragment } from "@ethersproject/abi";
import { ExternalProvider, JsonRpcFetchFunc, Networkish, Provider, TransactionResponse, Web3Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { Contract } from "./Contract";
import { Notify } from "./Notify";
import { ProviderError } from "./Errors/ProviderError";


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

  async sendTransaction(signedTransaction: string | Promise<string>): Promise<TransactionResponse> {
    try {
      const response = await super.sendTransaction(signedTransaction)

      return response
    } catch (error) {
      if (!error.DappSonar) {
        const providerError = new ProviderError(error.message, error.code, this.actualAddres)
        Notify.error(providerError)
        error.DappSonar = true
      }
      throw error
    }
  }

 

}