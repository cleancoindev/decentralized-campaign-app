import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8755b5efE8343d5f0fb89d49f68B1EB8BBf0fe02'
);
export default instance;