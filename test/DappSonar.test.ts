import { ProxyProvider } from '../src/ProxyProvider'
import { DappSonar } from '../src/DappSonar'
import { ProviderError } from '../src/Errors/ProviderError'
import { Notify } from '../src/Notify'
import { ContractError } from '../src/Errors/ContractError'
import { deployContract, MockProvider } from 'ethereum-waffle'
import ERC20 from "./fixtures/build/ERC20.json";

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

describe('Test Dappson catch fails from Provider', () => {
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
                        throw { message: 'This is a raw message', code: 4001 }
                    case 'eth_sendTransaction':
                        throw { message: 'This is a raw message', code: -32003 }
                    default:
                        return null
                }
            },
            selectedAddress: WALLET_ADDRESS
        }
        const proxy = new ProxyProvider(mockProvider)
        provider = new DappSonar(proxy, 1)
    })

    it('DappSonar catch failure sign message, user reject', async () => {
        jest.spyOn(Notify, 'error')

        const signer = provider.getSigner()
        try {
            await signer.signMessage('message')
        } catch (e) { }
        expect(Notify.error).toHaveBeenCalledTimes(1);
        const error = new ProviderError(`This is a raw message`, 4001, WALLET_ADDRESS)

        expect(Notify.error).toHaveBeenCalledWith(
            expect.objectContaining(error)
        );


    })

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

    it('DappSonar catch failure on send tx', async () => {
        jest.spyOn(Notify, 'error')
        try {
            await provider.send('eth_sendTransaction', [])
        } catch (error) { }
        expect(Notify.error).toHaveBeenCalledTimes(1);
        const error = new ProviderError(`This is a raw message`, -32003, WALLET_ADDRESS)

        expect(Notify.error).toHaveBeenCalledWith(
            expect.objectContaining(error)
        );

    })
})


const data = [
    {
        type: 'equilateral',
        sides: [1, 1, 1],
    },
    {
        type: 'isosceles',
        sides: [1, 1, 2],
    },
    {
        type: 'scalene',
        sides: [1, 2, 3],
    },
];

describe.each(data)(`Test Dappson catch fails from RPC`, (triangle) => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it(`whose sides are ${triangle.sides} should be ${triangle.type}`, async () => {
        jest.spyOn(Notify, 'error')

        const web3Provider = new MockProvider();
        const provider = new DappSonar(new ProxyProvider(web3Provider.provider))
        provider.getWallets = web3Provider.getWallets
        const wallets = provider.getWallets();
        const wallet = wallets[0]
        const token = await deployContract(wallet, ERC20, [wallet.address, 1000]);
        const signer = provider.getSigner()
        const contractAddres = token.address
        const noExistAbiFragment = [{
            inputs: [],
            name: "thisFunctionNoExist",
            outputs: [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            stateMutability: "view",
            type: "function"
        }]
        const TokenContract = DappSonar.Contract(contractAddres, [
            ...ERC20.abi, ...noExistAbiFragment
        ], signer)
        try {

            const name = await TokenContract.thisFunctionNoExist()
            console.log(name)
        } catch (e) { }
        expect(Notify.error).toHaveBeenCalledTimes(1);
        const error = new ContractError(contractAddres, 'thisFunctionNoExist', [], wallet, 'testMessage')
        expect(Notify.error).toHaveBeenCalledWith(
            expect.objectContaining(error)
        );
    });
});
