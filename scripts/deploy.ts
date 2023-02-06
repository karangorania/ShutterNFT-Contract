import { ethers } from 'hardhat';

async function main() {
  const ShutterNFT = await ethers.getContractFactory('ShutterNFT');
  const shutterNFT = await ShutterNFT.deploy();

  await shutterNFT.deployed();

  console.log(`Shutter NFT deployed to ${shutterNFT.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
