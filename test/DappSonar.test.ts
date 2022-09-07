import { MockProvider } from '@rsksmart/mock-web3-provider'
import { ProxyProvider } from '../src/ProxyProvider'

describe('test user acceptance for eth_requestAccounts', () => {
    const address = '0xB98bD7C7f656290071E52D1aA617D9cB4467Fd6D'
    const privateKey = 'de926db3012af759b4f24b5a51ef6afa397f04670f634aa4f48d4480417007f3'
    let provider
    beforeEach(async () => {
        provider = new ProxyProvider(
            new MockProvider({
                address, privateKey, networkVersion: 31, debug: false, manualConfirmEnable: true
            }))
    })


    it('rejects with denial', async () => {
        console.error = jest.fn();
        
        const responsePromise = provider.request({ method: 'personal_sign', params: ['asd',address] })
            .catch((_e:any) => {
                expect(console.error).toHaveBeenCalledWith('hello')
            })

        provider.answerEnable(false)
        await responsePromise
    })

})
