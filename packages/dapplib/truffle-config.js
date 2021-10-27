require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember exchange hover knee tail soccer'; 
let testAccounts = [
"0x52fb4407869ead78902e6a652b3105a5f34f114788f018512b955aaafeb4860a",
"0xb79adc0951817ecd3822a6d1dcc6f95b714885417859be1e4990f59ca6e3bfa8",
"0xc283c8493552b4443770245e27870e4db0e8b11fbc8e451bad1feb9504d69fd0",
"0x8f10c50117ab61d505f951328696254d0b4579e8cfe1444073539c08d4a204df",
"0x6492986ceb1cd2dc91979ee116ba868b3746388288284658d6a7e94a0d80692d",
"0x22deb2c669eba2695bf445a0c653bb7f4196b80d58eb4dfa6ae866a17db39b43",
"0x069e5ee34e4e5ce03e869a9dd00f3b23b796127bb123d1331b0896ffb6e24e21",
"0xaf183cc5185c16073326f616dfcf3ba156bc9c2052781427f505c9fae1a8e1b2",
"0x6ffcf6ec097cf0ad0dc0d59ddb12a24804a101c1f0328e1d334f08740dc406ff",
"0xac288f4262c70fcae6a0ce9ae52f896cb78c851feb39fc913319b438815bdc67"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

