const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    var depth = 1;
    var maxFoundDepth = 0;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        var currentArrayDepth = this.calculateDepth(array[i]);
        if (currentArrayDepth >= maxFoundDepth) {
          maxFoundDepth = currentArrayDepth;
        }
      }
    }
    depth += maxFoundDepth;
    return depth;
  }
};
