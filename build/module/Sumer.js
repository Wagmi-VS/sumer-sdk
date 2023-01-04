import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import { Contract } from './Contract';
import { ProviderError } from './Errors/ProviderError';
import { NotifyBuilder } from './Notify/Notify';
/**
 * Sumer is a Provider that extends ethers Web3Provider. Sumer can track the errors
 * that may occur during the interaction with a contract or the provider.
 */
export class Sumer extends Web3Provider {
    static apikey;
    actualAddres;
    static instance;
    static chainId;
    isProvider = false;
    constructor(_provider, key, network) {
        super(_provider, network);
        // @ts-ignore
        this.chainId = _provider.networkVersion;
        if (!this.isProvider) {
            this.isProvider = !!_provider;
            NotifyBuilder.build(key, this.chainId).setStatus();
        }
        super.listAccounts().then((accounts) => {
            this.actualAddres = accounts[0];
        });
        this.apikey = key;
        this.instance = this;
    }
    static getInstance() {
        return Sumer.instance;
    }
    // use the sumer contract to catch the errors
    static Contract(addressOrName, contractInterface, signerOrProvider, apikey, chainId) {
        return new Contract(addressOrName, contractInterface, signerOrProvider, apikey, chainId);
    }
    // wrap sendTransaction to catch errors
    async sendTransaction(signedTransaction) {
        try {
            const response = await super.sendTransaction(signedTransaction);
            // send tx data 
            const payload = {
                chainId: this.chainId,
                txHash: response.hash,
            };
            NotifyBuilder.build(this.apikey, this.chainId).txHash(payload);
            return response;
        }
        catch (error) {
            if (!error.DappSonar) {
                let from = this.actualAddres;
                try {
                    from = ethers.utils.parseTransaction(signedTransaction).from;
                }
                catch (error) {
                    from = this.actualAddres;
                }
                // notify the error to the sumer server
                const providerError = new ProviderError(error.message, error.code, from);
                NotifyBuilder.build(this.apikey, this.chainId).providerError(providerError);
                error.DappSonar = true;
            }
            throw error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvU3VtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFpRixZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUN0SSxPQUFPLEVBQWEsTUFBTSxFQUFVLE1BQU0sUUFBUSxDQUFBO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUcvQzs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sS0FBTSxTQUFRLFlBQVk7SUFFckMsTUFBTSxDQUFDLE1BQU0sQ0FBUztJQUNmLFlBQVksQ0FBb0I7SUFDL0IsTUFBTSxDQUFDLFFBQVEsQ0FBUTtJQUMvQixNQUFNLENBQUMsT0FBTyxDQUFTO0lBQ2YsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUczQixZQUFZLFNBQThDLEVBQUUsR0FBWSxFQUFFLE9BQW9CO1FBRTVGLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDekIsYUFBYTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQTtRQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDN0IsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1NBQ25EO1FBRUQsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFFdkIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxXQUFXO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBRUQsNkNBQTZDO0lBQ3RDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBcUIsRUFBRSxpQkFBeUQsRUFBRSxnQkFBb0MsRUFBRSxNQUFlLEVBQUUsT0FBZ0I7UUFDOUssT0FBTyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQzFGLENBQUM7SUFFRCx1Q0FBdUM7SUFDaEMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxpQkFBMkM7UUFFdEUsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQy9ELGdCQUFnQjtZQUNoQixNQUFNLE9BQU8sR0FBVztnQkFDdEIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUk7YUFDdEIsQ0FBQTtZQUNELGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRTlELE9BQU8sUUFBUSxDQUFBO1NBRWhCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFFZCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtnQkFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtnQkFDNUIsSUFBSTtvQkFDRixJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBOEIsQ0FBQyxDQUFDLElBQUksQ0FBQTtpQkFDMUU7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUE7aUJBQ3pCO2dCQUVELHVDQUF1QztnQkFDdkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUN4RSxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDM0UsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7YUFDdkI7WUFDRCxNQUFNLEtBQUssQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUNGIn0=