const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(names) {
  if (!Array.isArray(names)) return false;
  var scryptArray = [];
  for (let i = 0; i < names.length; i++) {
    if (typeof names[i] === "string") {
      var split = names[i].toLowerCase().trim().split("");
      scryptArray.push(split[0].toUpperCase());
    }
  }
  scryptArray = scryptArray.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });
  return scryptArray.join("");
};
