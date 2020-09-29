const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  var transformedArray = [...array];
  var discardNext = "--discard-next";
  var discardprev = "--discard-prev";
  var doubleNext = "--double-next";
  var doublePrev = "--double-prev";
  for (let i = 0; i < transformedArray.length; i++) {
    if (transformedArray[i] === discardNext) {
      if (typeof transformedArray[i + 1] !== "undefined") {
        transformedArray.splice(i, 2, "", "");
      } else {
        transformedArray.splice(i, 1, "");
      }
    }
    if (transformedArray[i] === discardprev) {
      if (typeof transformedArray[i - 1] !== "undefined") {
        transformedArray.splice(i - 1, 2, "", "");
      } else {
        transformedArray.splice(i, 1, "");
      }
    }
    if (transformedArray[i] === doubleNext) {
      if (typeof transformedArray[i + 1] !== "undefined") {
        transformedArray.splice(i, 1, transformedArray[i + 1]);
      } else {
        transformedArray.splice(i, 1, "");
      }
    }
    if (transformedArray[i] === doublePrev) {
      if (typeof transformedArray[i - 1] !== "undefined") {
        transformedArray.splice(i, 1, transformedArray[i - 1]);
      } else {
        transformedArray.splice(i, 1, "");
      }
    }
  }
  for (let i = 0; i < transformedArray.length; i++) {
    if (transformedArray[i] === "") {
      transformedArray.splice(i, 1);
      i--;
    }
  }
  return transformedArray;
}

// console.log(
//   transform([
//     "--double-prev",
//     1,
//     "--discard-prev",
//     false,
//     "--double-prev",
//     333,
//     "--discard-next",
//     "8.963",
//     "--discard-prev",
//     false,
//     { 0: "first", 1: "second", length: 2 },
//     { John: "Smith" },
//     "ABC",
//     false,
//     "--discard-prev",
//   ])
// );
