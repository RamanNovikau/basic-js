const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  var k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity != "string") return false;
  var sActivity = parseFloat(sampleActivity);
  if (isNaN(sActivity)) return false;
  var result = Math.round(
    Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k
  );
  if (isNaN(parseInt(result)) || result < 0) return false;
  return parseInt(result);
};
