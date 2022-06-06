import React, { createContext, useContext, useState, useRef } from 'react';

const CrypoFieldContext = createContext();

export const CrypoFieldProvider = ({ children }) => {

  const alpha = "~1234567890`-=_+qwertyu!@#$%^&*()iop[]\\QWERTY UIOP{}|asdfghjkl;ASDFGHJKL:\"\'zxcvbnm,./ZXCVBNM<>?";

  const toastRef = useRef();
  const outputRef = useRef();
  const [inputVal, setInputVal] = useState('');
  const [passw, setPassw] = useState('');
  const [outputVal, setOutputVal] = useState('');
  const [tostMessage, _setTostMessage] = useState({ "message": "", "type": 0, "show": 0 });

  const setTostMessage = (message, type, show) => {
    _setTostMessage({ "message": message, "type": type, "show": show });
    setTimeout(() => {
      _setTostMessage({ ...tostMessage, "show": 0 })
    }, 1500);
    if(toastRef && toastRef.current) toastRef.current.focus();
  }

  const encodeMessage = () => {
    if (checkIfFieldsEmpty()) {
      let i = 0;
      let c = -1;
      let re = "";
      while (i < inputVal.length) {
        c += 1;
        if (c >= passw.length) c -= passw.length;
        var ch = alpha.indexOf(inputVal.charAt(i)) + alpha.indexOf(passw.charAt(c));
        if (ch >= alpha.length)
          ch -= alpha.length;
        re += alpha.charAt(ch);
        i++;
      }
      setOutputVal(re);
      copyOututAndShowMessage();
    }

  }

  const decodeMessage = () => {
    if (checkIfFieldsEmpty()) {
      let c = -1;
      let i = 0;
      let pr = "";
      while (i < inputVal.length) {
        c += 1;
        if (c >= passw.length) c -= passw.length;
        var ch = alpha.indexOf(inputVal.charAt(i)) - alpha.indexOf(passw.charAt(c));
        if (ch < 0)
          ch += alpha.length;
        pr += alpha.charAt(ch);
        i++;
      }
      setOutputVal(pr);
      copyOututAndShowMessage();
    }
  }

  const checkIfFieldsEmpty = () => {
    if (inputVal && inputVal !== '' && passw && passw !== '') {
      return true;
    } else {
      setTostMessage("Message & Passphrse required", 2, 1);
    }
  }

  const copyOututAndShowMessage = () => {
    // let textField = document.createElement('textarea');
    // textField.innerText = outputVal
    // document.body.appendChild(textField)
    // textField.select()
    // document.execCommand('copy')
    // textField.remove()
    navigator.clipboard.writeText(outputVal);
    setTostMessage("Coppied", 1, 1);
  }

  return (
    <CrypoFieldContext.Provider value={{ tostMessage, encodeMessage, decodeMessage, inputVal, passw, outputVal, setInputVal, setPassw, setOutputVal, toastRef, outputRef }}>
      {children}
    </CrypoFieldContext.Provider>
  );
};

export const useCrypoFieldContext = () => useContext(CrypoFieldContext);