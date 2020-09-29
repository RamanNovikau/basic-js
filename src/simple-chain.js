const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainLength: 0,
  chain: "",
  getLength() {
    return this.chainLength;
  },
  addLink(value) {
    this.chain = this.chain + "( " + value + " )~~";
    this.chainLength++;
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position - 1 < 0 ||
      position > this.chainLength
    ) {
      this.chain = "";
      this.chainLength = 0;
      throw new Error("invalid position");
    }
    this.chain = this.chain.slice(0, -2);
    var splitChain = this.chain.split("~~");
    splitChain.splice(position - 1, 1);
    this.chain = splitChain.join("~~");
    this.chain += "~~";
    this.chainLength--;
    return this;
  },
  reverseChain() {
    this.chain = this.chain.slice(0, -2);
    this.chain = this.chain.split("~~").reverse().join("~~");
    if (this.chain) {
      this.chain += "~~";
    }
    return this;
  },
  finishChain() {
    var chain = this.chain;
    this.chain = "";
    this.chainLength = 0;
    return chain.slice(0, -2);
  },
};

module.exports = chainMaker;