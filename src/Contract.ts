import { Fragment, JsonFragment } from '@ethersproject/abi'
import { Provider } from '@ethersproject/providers'
import { BaseContract, ethers, Signer } from 'ethers'
import { ContractError } from './Errors/ContractError'
import { NotifyBuilder } from './Notify/Notify'

export class Contract {
    public baseContract: BaseContract
    private apiKey?: string
    private chainId?: number

    constructor(
        addressOrName: string, contractInterface: ReadonlyArray<Fragment | JsonFragment>,
        signerOrProvider?: Signer | Provider, apiKey?: string, chainId?: number) {

        this.baseContract = new ethers.Contract(addressOrName, contractInterface, signerOrProvider)
        // @ts-ignore
        const functionsNames = contractInterface.map((ci: any) => ci.name)
        this.apiKey = apiKey
        this.chainId = chainId

        console.log(functionsNames)
        functionsNames.forEach((key: any) => {
            this[key] = async (...args: any): Promise<any> => {
                let response: any
                try {
                    // @ts-ignore
                    response = await this.baseContract[key](...args)
                    const payload = {
                        chainId: this.chainId,
                        txHash: response.hash,
                        functionName: key,
                        functionArgs: args,
                    }

                    console.log(this.apiKey)
                    NotifyBuilder.build(this.apiKey, this.chainId).txHash(payload)

                } catch (error: any) {
                    if (!error.DappSonar) {
                        let address: string
                        if (Signer.isSigner(signerOrProvider)) {
                            address = await signerOrProvider.getAddress()
                        }
                        const contracError = new ContractError(
                            addressOrName,
                            key,
                            args,
                            address,
                            error.reason
                        )
                        NotifyBuilder.build(this.apiKey, this.chainId).error(contracError)
                        error.DappSonar = true
                    }
                    throw error
                }
                return response
            }
        })
    }
    [key: string]: any;
}
