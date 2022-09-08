import { ProxyProvider } from '../src/ProxyProvider'
import { DappSonar } from '../src/DappSonar'
import { ProviderError } from '../src/Errors/ProviderError'

const WALLET_ADDRESS = '0xff1ae5bc77d7a3a2dc26bb79e3f743ad2cec8f11'
describe('test user acceptance for eth_requestAccounts', () => {
    let provider: DappSonar
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
        jest.spyOn(global.console, 'error')

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
        expect(console.error).toHaveBeenCalledTimes(1);

        expect(console.error).toHaveBeenLastCalledWith({
            message: '[4001] Error from provider',
            timestamp: expect.any(Number),
            wallet: WALLET_ADDRESS
        });


    })

})
