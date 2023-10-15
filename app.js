let { Web3 } = require("web3");

const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3 = new Web3(provider);

console.log(
  web3.eth
    .getBalance("0xc2f67316af7225287196ba2f88a73f20ee42213b")
    .then((bal) => console.log(bal))
);

// console.log(
//   web3.eth
//     .getBalance("0xc2f67316af7225287196ba2f88a73f20ee42213b")
//     .then((bal) => console.log(web3.utils.fromWei(bal, "ether")))
// );
