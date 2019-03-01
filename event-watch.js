const Web3 = require('web3');

const url = 'https://mainnet.infura.io/v3/[インフラのAPIKEY]';
//InfuraのAPIキーを取得ください。https://infura.io/

//const abiFile ='/Users/kou1904/Desktop/mch/contract_abi.json' 
//ここはご自身のパスを入れてください。

const abiFile ='/Users/kou1904/Desktop/mch/contract_abi.json'
//ABIはetherscanのcodeの下の方にあるやつです。

const web3 = new Web3();
const provider = new web3.providers.HttpProvider(url);
web3.setProvider(provider);

const getWeb3Instance = function(url) {
    const web3 = new Web3();
    const provider = new web3.providers.HttpProvider(url);
    web3.setProvider(provider);
    return web3;
};

const getContractInstance = function(abiFile, web3Instance) {
    const json = require(abiFile);
    const abi = [{"constant":true,"inputs":[{"name":"_landSector","type":"uint256"}],"name":"getLandSectorWithdrawableBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_landSectorAssetAddress","type":"address"}],"name":"setLandSectorAssetAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_landSector","type":"uint256"}],"name":"withdrawMyReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawMyAllRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_lordAddress","type":"address"}],"name":"getWithdrawableBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_landSector","type":"uint256"}],"name":"getLandSectorWithdrawnAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getAllowedAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_landType","type":"uint16"}],"name":"getTotalEthBackAmountPerLandType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"landSectorAsset","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_landType","type":"uint16"},{"name":"_purchaseBy","type":"address"}],"name":"addEthToLandPool","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"desired","type":"bool"}],"name":"setAllowedAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_landSectorAssetAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"landType","type":"uint16"},{"indexed":false,"name":"txSender","type":"address"},{"indexed":true,"name":"purchaseBy","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"at","type":"uint256"}],"name":"EthAddedToPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"landSector","type":"uint256"},{"indexed":true,"name":"lord","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"at","type":"uint256"}],"name":"WithdrawEther","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"allowedAddress","type":"address"},{"indexed":false,"name":"allowedStatus","type":"bool"}],"name":"AllowedAddressSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];
    const contractAddress = '0x4A627B324189014fA757eD7cc730b180879232D7'   //json.networks['1'].address;
    const instance = new web3Instance.eth.Contract(abi, contractAddress);
    console.log(instance);
    return instance;
};

const getEvent = async function(fromBlock, toBlock) {
    const web3 = getWeb3Instance(url);
    console.log(web3);
    const instance = getContractInstance(abiFile, web3);
    const option = {fromBlock: fromBlock, toBlock: toBlock};
    const logs = await instance.getPastEvents(option);
    return logs;
};

const main = async function(argv) {

    if(argv.length != 4) {
        console.log("-4-");
        return JSON.stringify({error: 'argv length is invalid'});
    } else {
        console.log("-2-");
        const from = argv[2];
        const to = argv[3];
    
        return JSON.stringify(await getEvent(argv[2], argv[3]));
    };

(async function() {

    var json_ = await main(process.argv);
    var fs = require('fs');
	fs.writeFile('sample.json',JSON.stringify(json_, null, '    '));

})();
