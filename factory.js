import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1F522B682EB9421414B41F8Cb1da7eDfbFEa7945'
);
export default instance;