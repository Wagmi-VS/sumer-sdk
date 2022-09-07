import { Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import { Contract } from "./Contract";
export class DappSonar extends Web3Provider {
    actualAddres;
    constructor(_provider, network) {
        super(_provider, network);
        super.listAccounts().then(a => {
            this.actualAddres = a[0];
        });
        /*
    
        const web3 = new Web3Provider(_provider, 'any')
        const handler = {
          get: function (target: any, prop: any, _receiver: any) {
            console.log('Function', prop)
            
            try {
              if (typeof target[prop] === 'function') {
                return new Proxy(target[prop], { apply: applyProxy });
              } else {
                return Reflect.get(target, prop);
              }
            } catch (error) {
              console.error(error)
            }
          },
          apply: applyProxy
        };
        
        return new Proxy(web3, handler)
        */
    }
    async sendTransaction(signedTransaction) {
        return super.sendTransaction(signedTransaction);
    }
    async getBalance(address) {
        let balance = BigNumber.from(0);
        try {
            balance = await super.getBalance(address);
            console.log('Balance of', this.actualAddres, ' is ', balance.toString());
        }
        catch (error) {
            console.log('Error on getBlance');
        }
        return balance;
    }
    static Contract(addressOrName, contractInterface, signerOrProvider) {
        return new Contract(addressOrName, contractInterface, signerOrProvider);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFwcFNvbmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RhcHBTb25hci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlGLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxRQUFRLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUd0QyxNQUFNLE9BQU8sU0FBVSxTQUFRLFlBQVk7SUFDekMsWUFBWSxDQUFvQjtJQUVoQyxZQUFZLFNBQThDLEVBQUUsT0FBb0I7UUFDOUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQixLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBR0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXFCRTtJQUdKLENBQUM7SUFJRCxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUEyQztRQUMvRCxPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQ0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFlO1FBQzlCLElBQUksT0FBTyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUMsSUFBSTtZQUVGLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDekU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtTQUNsQztRQUVELE9BQU8sT0FBTyxDQUFBO0lBRWhCLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQXFCLEVBQUUsaUJBQXlELEVBQUUsZ0JBQW9DO1FBRXBJLE9BQU8sSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDekUsQ0FBQztDQUNGIn0=