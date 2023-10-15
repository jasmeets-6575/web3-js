let { Web3 } = require("web3");

const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3 = new Web3(provider);

// Get Balance
// console.log(
//   web3.eth
//     .getBalance("0xc2f67316af7225287196ba2f88a73f20ee42213b")
//     .then((bal) => console.log(bal))
// );

// Get Balance in ETHER
// console.log(
//   web3.eth
//     .getBalance("0xc2f67316af7225287196ba2f88a73f20ee42213b")
//     .then((bal) => console.log(web3.utils.fromWei(bal, "ether")))
// );

// Transferring ether from one account to another from ganache
// console.log(
//   web3.eth.sendTransaction({
//     from: "0x48b945d91A15b9247B8EBe12a285471bc7cCF554",
//     to: "0xC2F67316Af7225287196ba2F88a73F20Ee42213b",
//     value: web3.utils.toWei("5", "ether"),
//   })
// );

// Connecting with Remix IDE
let contract = new web3.eth.Contract(
  [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_x",
          type: "uint256",
        },
      ],
      name: "set",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "x",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  "0xcc11Dbcf477656C4440fC0a3d38353158bf16E20"
);

console.log(
  contract.methods
    .x()
    .call()
    .then((result) => console.log(result))
);
