let solc = require("solc");

let fs = require("fs");

let { Web3 } = require("web3");

const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3 = new Web3(provider);

let fileContent = fs.readFileSync("demo.sol").toString();

var input = {
  language: "Solidity",
  sources: {
    "demo.sol": {
      content: fileContent,
    },
  },

  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
let ABI = output.contracts["demo.sol"]["demo"].abi;
let bytecode = output.contracts["demo.sol"]["demo"].evm.bytecode;

let contract = new web3.eth.Contract(ABI);

let defaultAccount;
web3.eth.getAccounts().then((account) => {
  defaultAccount = account[0];

  contract
    .deploy({ data: bytecode })
    .send({ from: defaultAccount, gas: 500000 })
    .on("receipt", (receipt) => {
      console.log(receipt.contractAddress);
    })
    .then((demoContract) => {
      demoContract.methods.x().call((err, data) => {
        console.log(data);
      });
    });
});
