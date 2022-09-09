import { ProxyProvider } from '../src/ProxyProvider'
import { DappSonar } from '../src/DappSonar'
import { ProviderError } from '../src/Errors/ProviderError'
import { Notify } from '../src/Notify'
import { ContractError } from '../src/Errors/ContractError'

const WALLET_ADDRESS = '0xff1ae5bc77d7a3a2dc26bb79e3f743ad2cec8f11'
describe('test user acceptance for eth_requestAccounts', () => {
    let provider: DappSonar
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(async () => {
        const mockProvider = {
            request: async (a) => {
                switch (a.method) {
                    case 'eth_accounts':
                        return [WALLET_ADDRESS]
                    case 'personal_sign':
                        return 'this is a signed message'
                    default:
                        return null
                }
            }
        }
        const proxy = new ProxyProvider(mockProvider)

        provider = new DappSonar(proxy, 1)
    })


    it('DappSonar can sign messsage', async () => {

        const signer = provider.getSigner()
        const msgSigned = await signer.signMessage('message')
        expect(msgSigned).toEqual('this is a signed message')
    })

    it('DappSonar catch failure sign message', async () => {
        jest.spyOn(Notify, 'error')

        const mockProvider = {
            request: async (a) => {
                switch (a.method) {
                    case 'eth_accounts':
                        return [WALLET_ADDRESS]
                    case 'personal_sign':
                        throw new ProviderError('Error from provider', 4001, WALLET_ADDRESS)
                    default:
                        return null
                }
            },
            selectedAddress: WALLET_ADDRESS
        }
        const proxy = new ProxyProvider(mockProvider)

        provider = new DappSonar(proxy, 1)
        const signer = provider.getSigner()
        try {
            await signer.signMessage('message')
        } catch (e) { }
        expect(Notify.error).toHaveBeenCalledTimes(1);

        const providerError = new ProviderError('Error from provider', 4001, WALLET_ADDRESS)

        expect(Notify.error).toHaveBeenCalledWith(providerError);


    })
    it('DappSonar catch failure contract build method', async () => {

        jest.spyOn(Notify, 'error')

        const walletAddress = provider.actualAddres

        const abi = [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
        const signer = provider.getSigner()
        const contractAddres = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
        const USDTContract = DappSonar.Contract(contractAddres, abi, signer)
        try {
            await USDTContract.approve(walletAddress, false);
        } catch (_e) { }
        expect(Notify.error).toHaveBeenCalledTimes(1);

        const error = new ContractError(contractAddres, 'approve', [walletAddress, 'false'], WALLET_ADDRESS)

        expect(Notify.error).toHaveBeenCalledWith(error);
    })

})
