import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
    apiKey: import.meta.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

export default new Alchemy(settings);

