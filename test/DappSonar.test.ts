
import { ProxyProvider } from '../src/ProxyProvider'
import { DappSonar } from '../src/DappSonar'
import { ProviderError } from '../src/Errors/ProviderError'
import { Notify } from '../src/Notify'
import { ContractError } from '../src/Errors/ContractError'

const WALLET_ADDRESS = '0xFf1AE5Bc77D7a3a2dc26bb79e3F743Ad2ceC8F11'


describe('Test user can use Provider as expected', () => {
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

        jest.resetAllMocks();
    })

    it('DappSonar can sign messsage', async () => {

        const signer = provider.getSigner()
        const msgSigned = await signer.signMessage('message')
        expect(msgSigned).toEqual('this is a signed message')
    })

    it('DappSonar can retrieve actual account', async () => {
        const address = provider.actualAddres
        expect(address).toEqual(WALLET_ADDRESS)
    })

})


// eip1193
const eip1193: number[] = [4001, 4100, 4200, 4900, 4901];
describe.each(eip1193)('Test DappSonar catch fails from provider: eip-1193 errors', (errorCode) => {
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
                        throw { message: 'This is a raw message', code: errorCode }
                    default:
                        return null
                }
            },
            selectedAddress: WALLET_ADDRESS
        }
        const proxy = new ProxyProvider(mockProvider)
        provider = new DappSonar(proxy, 1)
    })

    it(`DappSonar catch failure sign message, error: ${errorCode}`, async () => {
        jest.spyOn(Notify, 'error')
        try {
            await provider.send('personal_sign', [])
        } catch (_e) { }
        expect(Notify.error).toHaveBeenCalledTimes(1);
        const error = new ProviderError('This is a raw message', errorCode, WALLET_ADDRESS)
        expect(Notify.error).toHaveBeenCalledWith(
            expect.objectContaining(error)
        );
    })
})


describe('Test DappSonar catch fails from provider, contract interaction', () => {
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
                    default:
                        return null
                }
            },
            selectedAddress: WALLET_ADDRESS
        }
        const proxy = new ProxyProvider(mockProvider)
        provider = new DappSonar(proxy, 1)
    })

    //contract
    it('DappSonar catch failure on contract build method', async () => {

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

        const error = new ContractError(contractAddres,
            'approve',
            [walletAddress, false],
            WALLET_ADDRESS,
            "invalid BigNumber value (argument=\"value\", value=false, code=INVALID_ARGUMENT, version=bignumber/5.7.0)")

        expect(Notify.error).toHaveBeenCalledWith(
            expect.objectContaining(error)
        );
    })
})


const eip1474: number[] =
    [-32700, -32600, -32601, -32602, -32603, -32000,
    -32001, -32002, -32003, -32004, -32005, -32006];
describe.each(eip1474)('Test DappSonar catch fails from provider, eip-1447 errors', (errorCode) => {
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
                    case 'eth_sendTransaction':
                        throw { message: 'This is a raw message', code: errorCode }
                    default:
                        return null
                }
            },
            selectedAddress: WALLET_ADDRESS
        }
        const proxy = new ProxyProvider(mockProvider)
        provider = new DappSonar(proxy, 1)
    })

    it(`DappSonar catch failure on send tx, error: ${errorCode}`, async () => {
        jest.spyOn(Notify, 'error')
        try {
            await provider.send('eth_sendTransaction', [])
        } catch (error) { }
        expect(Notify.error).toHaveBeenCalledTimes(1);
        const error = new ProviderError(`This is a raw message`, errorCode, WALLET_ADDRESS)

        expect(Notify.error).toHaveBeenCalledWith(
            expect.objectContaining(error)
        );

    })
})
