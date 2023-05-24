const Web3 = require('web3');
const MyContract = require('./build/contracts/MyContract.json');
const address = '0xB91a216dCa621Cf4CBb314551ABc3019481C6493'; 
const privateKey = '47ba641b40c35003958adf3b05a64988d4ba29ac99f148e110ff9e04304be812';
const infuraUrl = 'https://rinkeby.infura.io/v3/74aa9a15e2524f6980edb8a377301f3c';

const init1 = async () => {
    const web3 = new Web3(infuraUrl);
    const networkId = await web3.eth.net.getId();
    const myContract = new web3.eth.Contract(
        MyContract.abi,
        MyContract.networks[networkId].address
    );

    const tx = myContract.methods.set(1);
}

init1();