const { ethers } = require("hardhat");
async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    //0x76663b9E5Df95EFE01a88B589De2b4119041a337

    //0x8c52aa219c91ca1d790f05fa99f57c6de7c109c8