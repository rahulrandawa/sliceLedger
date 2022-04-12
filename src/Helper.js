const CryptoJS = require("crypto-js");

 function decryptData(values) {
    const Key = CryptoJS.enc.Utf8.parse("xlhF31NeOlibJcoOW9tvZg7TkHcAZI3a");  // 1. Replace C by CryptoJS
    const IV = CryptoJS.enc.Utf8.parse("qwertyuiopasdfgh"); 
    const decryptedText = CryptoJS.AES.decrypt(values, Key, {                             // 4. Use decrypt instead of encrypt
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const decryptData = JSON.parse(decryptedText.toString(CryptoJS.enc.Utf8));  

    return decryptData;

}

export {
    decryptData
  }