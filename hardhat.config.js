require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
    networks: {
      goerli: {
        url: "https://serene-greatest-darkness.ethereum-goerli.discover.quiknode.pro/60f032516ae6ed7ee9d30cce7ab785fd45ad8590/",
        accounts: ["6544f4b3b7d6ddf5afb335fa9d982e1f76a7aed5e14354b446b2a841f68f9f1d"]
      },
      mainnet: {
        url: "empty",
        accounts: [],
      }
    }
};
