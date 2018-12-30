import Web3 from 'web3';
let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')
{
    // we are in the browser and metamask running
    web3 = new Web3(window.web3.currentProvider);
}else{
    // we are in the server and matamask is not using by user
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/944f5399c18049d9920b3bc9c60583de'
    );
    web3 = new Web3(provider);
}
export default web3;