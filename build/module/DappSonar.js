import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "./Contract";
export class DappSonar extends Web3Provider {
    actualAddres;
    constructor(_provider, network) {
        super(_provider, network);
        super.listAccounts().then(a => {
            this.actualAddres = a[0];
        });
    }
    static Contract(addressOrName, contractInterface, signerOrProvider) {
        return new Contract(addressOrName, contractInterface, signerOrProvider);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFwcFNvbmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RhcHBTb25hci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTRELFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFHdEMsTUFBTSxPQUFPLFNBQVUsU0FBUSxZQUFZO0lBQ3pDLFlBQVksQ0FBb0I7SUFFaEMsWUFBWSxTQUE4QyxFQUFFLE9BQW9CO1FBQzlFLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQXFCLEVBQUUsaUJBQXlELEVBQUUsZ0JBQW9DO1FBQ3BJLE9BQU8sSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGdCQUEwQixDQUFDLENBQUE7SUFDbkYsQ0FBQztDQUNGIn0=