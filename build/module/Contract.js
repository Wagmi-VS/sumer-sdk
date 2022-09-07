import { BaseContract } from "ethers";
import { ContractError } from "./Errors/ContractError";
import { Notify } from "./Notify";
export class Contract {
    baseContract;
    constructor(addressOrName, contractInterface, signerOrProvider) {
        this.baseContract = new BaseContract(addressOrName, contractInterface, signerOrProvider);
        //@ts-ignore
        const functionsNames = contractInterface.map((ci) => ci.name);
        functionsNames.forEach((key) => {
            this[key] = async (...args) => {
                let response;
                try {
                    //@ts-ignore
                    response = await this.baseContract[key](...args);
                }
                catch (error) {
                    if (!error.DappSonar) {
                        const contracError = new ContractError(addressOrName, key, args);
                        Notify.error(contracError);
                        error.DappSonar = true;
                    }
                    throw error;
                }
                return response;
            };
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29udHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLFFBQVEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxNQUFNLE9BQU8sUUFBUTtJQUNqQixZQUFZLENBQWM7SUFDMUIsWUFBWSxhQUFxQixFQUFFLGlCQUF5RCxFQUFFLGdCQUFvQztRQUM5SCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3hGLFlBQVk7UUFDWixNQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLElBQVMsRUFBZ0IsRUFBRTtnQkFDN0MsSUFBSSxRQUFhLENBQUE7Z0JBQ2pCLElBQUk7b0JBQ0EsWUFBWTtvQkFDWixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7aUJBQ25EO2dCQUFDLE9BQU8sS0FBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTt3QkFDbEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxhQUFhLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTt3QkFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTt3QkFDMUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7cUJBQ3pCO29CQUNELE1BQU0sS0FBSyxDQUFBO2lCQUNkO2dCQUNELE9BQU8sUUFBUSxDQUFBO1lBQ25CLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKIn0=