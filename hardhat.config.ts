import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config();

const { RPC_URL, PRIVATE_KEY, POLYGON_SCAN_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: POLYGON_SCAN_KEY,
  },
};

export default config;
