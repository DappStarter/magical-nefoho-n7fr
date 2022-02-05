require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth ridge proud hunt drop slot gentle'; 
let testAccounts = [
"0xc41c6b4260ef0482c9e8bcb585591a7628bd5ad4cf5c5a803a8f15faa0100114",
"0xb8aca5631f64f7e849846ac559e3138612216291e59f7806459bd9e7cc0097e7",
"0x96b918def54e828b2cfd25bf8bcb184d83eaee13b88130fd0731149efce626fa",
"0xa6b8b9198548e136b0ed774400add90a1705ee2482cb70a97c7faa794372b32e",
"0xa639b267a398b8c5be38d92838676bcb621a614f6c90a11905bdc052475a6bf4",
"0x5b1228f678ff1c1fd5df8d60b3dc5370ea754379e6fcb6ef138d228306372103",
"0xe6001af369a32553a55aafe47f49b47f06cb5cdbbb13012266cc770f40258bc3",
"0x2508b47b8a941bf5b2fa791b772979f65fa47c1431a59e00f5af3c6a808b248e",
"0x74df375200898b4da9c37de46794a11b245ea84dae179791c8580498dfb310f1",
"0xfc724970565f6332a84b5c0c1dc00f5db04397ba944b5cd7a8f0da404dd92788"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

