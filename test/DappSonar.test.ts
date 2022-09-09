import { ProxyProvider } from '../src/ProxyProvider'
import { DappSonar } from '../src/DappSonar'
import { ProviderError } from '../src/Errors/ProviderError'
import { Notify } from '../src/Notify'

const WALLET_ADDRESS = '0xff1ae5bc77d7a3a2dc26bb79e3f743ad2cec8f11'

//errors:
const eUserReject = new ProviderError('User rejected the request.', 4001, WALLET_ADDRESS)
const eTxRejected = new ProviderError('Transaction rejected"', -32003, WALLET_ADDRESS)
const eNotAuthorized = new ProviderError('The requested account and/or method has not been authorized by the user.',
    4100, WALLET_ADDRESS)

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
                    case 'eth_sendTransaction':
                        throw eTxRejected
                    case 'wallet_switchEthereumChain':
                            throw eNotAuthorized
                    default:
                        return null
                }
            }
        }
        const proxy = new ProxyProvider(mockProvider)
        provider = new DappSonar(proxy, 1)

        jest.resetAllMocks();
    })


    it('DappSonar can sign messsage', async () => {

        const signer = provider.getSigner()
        const msgSigned = await signer.signMessage('message')
        expect(msgSigned).toEqual('this is a signed message')
    })

    it('DappSonar catch failure sign message, user reject', async () => {
        jest.spyOn(Notify, 'error')
        const mockProvider = {
            request: async (a) => {
                switch (a.method) {
                    case 'eth_accounts':
                        return [WALLET_ADDRESS]
                    case 'personal_sign':
                        throw eUserReject
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
        expect(Notify.error).toHaveBeenCalledWith(eUserReject);


    })

    it('DappSonar, cant send tx', async () => {
        jest.spyOn(Notify, 'error')
        try {
            await provider.send('eth_sendTransaction', [])
        } catch (error) {}
        expect(Notify.error).toHaveBeenCalledTimes(1);
        expect(Notify.error).toHaveBeenCalledWith(eTxRejected);

    })

    it('DappSonar, action not authorized', async () => {
        jest.spyOn(Notify, 'error')
        try {
            await provider.send('wallet_switchEthereumChain', [])
        } catch (error) {}
        expect(Notify.error).toHaveBeenCalledTimes(1);
        expect(Notify.error).toHaveBeenCalledWith(eNotAuthorized);

    })

})

