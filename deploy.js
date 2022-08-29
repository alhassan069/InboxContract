const rinkebyTestApi = 'YOUR_TEST_API_ADDRESS'; // Test api address
const accountMneumonic = 'YOUR_ACCOUNT_MNEUMONIC'; // Account mneumonic
const HDWalletProvider = require('@truffle/hdwallet-provider'); //library to connect to your wallet/account
const Web3 = require('web3');
const { abi, evm } = require('./compile'); //get the compiled solidity bytecode and ABI

// preparing the provider to connect with web3 by connecting to my account. 
const provider = new HDWalletProvider(
    accountMneumonic,
    rinkebyTestApi
);

// connecting to web3
const web3 = new Web3(provider);



const deploy = async() => {
    const accounts = await web3.eth.getAccounts(); // Get a list of all accounts
    console.log('Attempting to deploy from account ', accounts[0]);

    // real deployment is done here.
    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ['Hello World!!!'] })
        .send({ from: accounts[0], gas: '1000000' })
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
}
deploy();