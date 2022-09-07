"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DappSonar = void 0;
const providers_1 = require("@ethersproject/providers");
const ethers_1 = require("ethers");
const Contract_1 = require("./Contract");
class DappSonar extends providers_1.Web3Provider {
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
        let balance = ethers_1.BigNumber.from(0);
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
        return new Contract_1.Contract(addressOrName, contractInterface, signerOrProvider);
    }
}
exports.DappSonar = DappSonar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFwcFNvbmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RhcHBTb25hci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBdUk7QUFDdkksbUNBQTJDO0FBQzNDLHlDQUFzQztBQUd0QyxNQUFhLFNBQVUsU0FBUSx3QkFBWTtJQUd6QyxZQUFZLFNBQThDLEVBQUUsT0FBb0I7UUFDOUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQixLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBR0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXFCRTtJQUdKLENBQUM7SUFJRCxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUEyQztRQUMvRCxPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQ0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFlO1FBQzlCLElBQUksT0FBTyxHQUFjLGtCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFDLElBQUk7WUFFRixPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ3pFO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7U0FDbEM7UUFFRCxPQUFPLE9BQU8sQ0FBQTtJQUVoQixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFxQixFQUFFLGlCQUF5RCxFQUFFLGdCQUFvQztRQUVwSSxPQUFPLElBQUksbUJBQVEsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0NBQ0Y7QUEzREQsOEJBMkRDIn0=