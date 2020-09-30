const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  flag = true;
  constructor(flag) {
    if (typeof flag !== "undefined") {
      this.flag = flag;
    }
  }

  generateKey(string, key) {
    var x = string.replace(/[^a-z]/gi, "").length;
    for (let i = 0; ; i++) {
      if (x == i) i = 0;
      if (key.length >= x) break;
      key += key.charAt(i);
    }
    return key;
  }

  encrypt(string, key) {
    var encryptedString = "";
    var uppertring = string.toUpperCase();
    var upperKey = this.generateKey(uppertring, key).toUpperCase();
    var k = 0;
    for (let i = 0; i < string.length; i++) {
      if (uppertring.charCodeAt(i) >= 65 && uppertring.charCodeAt(i) <= 90) {
        var char = (uppertring.charCodeAt(i) + upperKey.charCodeAt(i - k)) % 26;
        char += "A".charCodeAt(0);
        encryptedString += String.fromCharCode(char);
      } else {
        encryptedString += uppertring.charAt(i);
        k++;
      }
    }
    if (!this.flag) {
      return encryptedString.split("").reverse().join("");
    }
    return encryptedString;
  }
  decrypt(string, key) {
    var decryptedString = "";
    var uppertring = string.toUpperCase();
    var upperKey = this.generateKey(uppertring, key).toUpperCase();
    var k = 0;
    for (let i=0; i < string.length; i++) {
      if (uppertring.charCodeAt(i) >= 65 && uppertring.charCodeAt(i) <= 90) {
        var char =
          (uppertring.charCodeAt(i) - upperKey.charCodeAt(i - k) + 26) % 26;
        char += "A".charCodeAt(0);
        decryptedString += String.fromCharCode(char);
      } else {
        decryptedString += uppertring.charAt(i);
        k++;
      }
    }
    if (!this.flag) {
      return decryptedString.split("").reverse().join("");
    }
    return decryptedString;
  }
}

module.exports = VigenereCipheringMachine;