async function start() {
    const web3 = new Web3(window.web3.currentProvider);
    console.log(web3)
    const connectButton = document.querySelector(".connect-button");
    
    connectButton.addEventListener('click', async function () {
        await ethereum.enable();
        const connected = document.createElement("div");
        connected.id = "connected";
        document.body.appendChild(connected);
    });

    const signButton = document.querySelector(".sign-button");
    signButton.addEventListener('click', async function () {
        const accounts = await web3.eth.getAccounts();
        await web3.eth.personal.sign("TEST", accounts[0]); 
        const signed = document.createElement("div");
        signed.id = "signed";
        document.body.appendChild(signed);
    });
}

start();