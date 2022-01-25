require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'YOUR ALCHEMY ROPSTEN NETWORK',
      accounts: ['METAMASK ACCOUNT ADDRESS'],
    },
  },
};
