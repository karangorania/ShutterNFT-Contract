# Shutter NFT

Video NFT which will upload to Livepeer Network then to IPFS and after this it will mint as NFT.

Note : Only you can mint to wallet connected address not to others.

## Important Step

```bash
create .env file in root directory.
```

```bash
    ALCHEMY_MUMBAI_API_KEY=YOUR_ALCHEMY_API_KEY
    PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
    POLYGON_SCAN_KEY=YOUR_POLYGON_SCAN_KEY

```

-Get Your API Key

- [Alchemy](https://alchemy.com/?r=36af7883c4699196)

-Get Your Mumbai Faucet

- [Mumbai Faucet](https://mumbaifaucet.com/)

## NPM Packages

- [Openzeppelin](https://www.npmjs.com/package/@openzeppelin/contracts)
- [Ethers](https://www.npmjs.com/package/ethers)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Tech Stack

- [Node](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/)
- [Openzeppelin](https://openzeppelin.com/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/karangorania/Shutter-Video-NFT
```

Go to the project directory

```bash
  cd Shutter-Video-NFT
```

Install dependencies

```bash
  npm install
```

Compile

```bash
  npx hardhat compile
```

Test

```bash
  npx hardhat test
```

Deploy

```bash
  node scripts/deploy.ts
```

Deploy on Mumbai

```bash
 npx hardhat run scripts/deploy.ts --network mumbai
```

Verify Contract

```bash
npx hardhat verify --network mumbai <YOUR_CONTRACT_ADDRESS>
```

Help

```bash
  npx hardhat help
```

## Check on Polygon Explorer

- [ShutterNFT](https://mumbai.polygonscan.com/address/0xCCf3707A027070BEF5711C2098eF1F8C338bAbfa)
