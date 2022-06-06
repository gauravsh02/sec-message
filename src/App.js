import './App.css';

import { useCrypoFieldContext } from './Contexts/CrypoFieldContextProvider';
import { Nav, Toast, Footer, EncodeDecodeForm } from './compoents/index';

function App() {
  const { tostMessage, encodeMessage, decodeMessage, inputVal, passw, outputVal, setInputVal, setPassw, setOutputVal, toastRef, outputRef } = useCrypoFieldContext();
  return (
    <div className="App">
      <Nav />
      <Toast tostMessage={tostMessage} toastRef={toastRef} />
      <EncodeDecodeForm encodeMessage={encodeMessage} decodeMessage={decodeMessage} inputVal={inputVal} passw={passw} outputVal={outputVal} setInputVal={setInputVal} setPassw={setPassw} setOutputVal={setOutputVal} outputRef={outputRef} /> 
      <Footer />
    </div>
  );
}

export default App;
