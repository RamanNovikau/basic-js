const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var turns = Math.pow(2, disksNumber) - 1;
  var seconds = Math.floor(turns / (turnsSpeed / 3600));
  return { turns: turns, seconds: seconds };
};
