import { ProxyProvider } from '../src/ProxyProvider'
import { DappSonar } from '../src/DappSonar'
import { createMock } from 'ts-auto-mock'

import { JsonRpcFetchFunc } from "@ethersproject/providers";


describe('test user acceptance for eth_requestAccounts', () => {
    let provider
    beforeEach(async () => {
        const mock = createMock<JsonRpcFetchFunc>(async (a,b)=>{
            console.log(a,b)
            return 'a'
        });
        mock('a',['asd'])
        // windows.ethereum

        const proxy = new ProxyProvider(mock)
        provider = new DappSonar(proxy, 1)
    })


    it('Proxy provider fail on GET property', async () => {
        const signer = await provider.getSigner()
        const signature = await signer.signMessage('patata');
        console.log(signature)
    })

    it('Proxy provider fail on CALL function', async () => { })

})
