import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xCce74DF0C6029de5A2b95A6DD0Ad646DFEdf2eF7'
);
export default instance;