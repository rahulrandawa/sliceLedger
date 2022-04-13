import { Navigate } from 'react-router-dom';
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

    if (decryptData.message == "Unauthenticated") {
        localStorage.removeItem('accessToken');
        localStorage.clear();
        sessionStorage.clear()
    } else if (parseInt(decryptData.status) == 401){
        localStorage.removeItem('accessToken');
        localStorage.clear();
        sessionStorage.clear()
    }

    return decryptData;

}


export {
    decryptData
  }