let { Web3 } = require("web3");

const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3 = new Web3(provider);

// console.log(
//   web3.eth
//     .getBalance("0xc2f67316af7225287196ba2f88a73f20ee42213b")
//     .then((bal) => console.log(bal))
// );

// console.log(
//   web3.eth
//     .getBalance("0xc2f67316af7225287196ba2f88a73f20ee42213b")
//     .then((bal) => console.log(web3.utils.fromWei(bal, "ether")))
// );

console.log(
  web3.eth.sendTransaction({
    from: "0x48b945d91A15b9247B8EBe12a285471bc7cCF554",
    to: "0xC2F67316Af7225287196ba2F88a73F20Ee42213b",
    value: web3.utils.toWei("5", "ether"),
  })
);
