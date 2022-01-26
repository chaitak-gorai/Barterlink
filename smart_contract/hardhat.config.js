//https://eth-ropsten.alchemyapi.io/v2/4txKCxuA4ZEXfvzjQx0e3IsPTYryTJen

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/4txKCxuA4ZEXfvzjQx0e3IsPTYryTJen',
      accounts: ['7c22102b2fed28d2de2d632613975283ece626944e51ec603f5c69f6601a7a3c'],
    },
  },
};