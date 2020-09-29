const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var separator = "+";
  var additionSeparator = "|";
  var repeatTimes = 1;
  var additionRepeatTimes = 1;
  var result = "";
  if (options.separator !== undefined) {
    separator = options.separator;
  }
  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  }
  if (options.additionSeparator !== undefined) {
    additionSeparator = options.additionSeparator;
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (result) {
      result += separator;
    }
    result += str;
    if (options.addition !== undefined) {
      if (options.additionRepeatTimes !== undefined) {
        additionRepeatTimes = options.additionRepeatTimes;
      }
      result += repeater(options.addition, {
        repeatTimes: additionRepeatTimes,
        separator: additionSeparator,
      });
    }
  }
  return result;
};
