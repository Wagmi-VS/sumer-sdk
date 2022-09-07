"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const ethers_1 = require("ethers");
const ContractError_1 = require("./Errors/ContractError");
const Notify_1 = require("./Notify");
class Contract {
    constructor(addressOrName, contractInterface, signerOrProvider) {
        this.baseContract = new ethers_1.BaseContract(addressOrName, contractInterface, signerOrProvider);
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
                        //@ts-ignore
                        const address = await signerOrProvider.getAddress();
                        console.log(address);
                        const contracError = new ContractError_1.ContractError(addressOrName, key, args);
                        Notify_1.Notify.error(contracError);
                        error.DappSonar = true;
                    }
                    throw error;
                }
                return response;
            };
        });
    }
}
exports.Contract = Contract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29udHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsbUNBQThDO0FBQzlDLDBEQUF1RDtBQUN2RCxxQ0FBa0M7QUFFbEMsTUFBYSxRQUFRO0lBRWpCLFlBQVksYUFBcUIsRUFBRSxpQkFBeUQsRUFBRSxnQkFBb0M7UUFDOUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHFCQUFZLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFDeEYsWUFBWTtRQUNaLE1BQU0sY0FBYyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5FLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsSUFBUyxFQUFnQixFQUFFO2dCQUM3QyxJQUFJLFFBQWEsQ0FBQTtnQkFDakIsSUFBSTtvQkFDQSxZQUFZO29CQUNaLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtpQkFDbkQ7Z0JBQUMsT0FBTyxLQUFVLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO3dCQUNsQixZQUFZO3dCQUNaLE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUE7d0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7d0JBQ3BCLE1BQU0sWUFBWSxHQUFHLElBQUksNkJBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO3dCQUNoRSxlQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO3dCQUMxQixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtxQkFDekI7b0JBQ0QsTUFBTSxLQUFLLENBQUE7aUJBQ2Q7Z0JBQ0QsT0FBTyxRQUFRLENBQUE7WUFDbkIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBRUo7QUE3QkQsNEJBNkJDIn0=