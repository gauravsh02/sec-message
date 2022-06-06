import React from "react";
const EncodeDecodeForm = ({encodeMessage, decodeMessage, inputVal, passw, outputVal, setInputVal, setPassw, setOutputVal, outputRef }) => {
  return (
    <div className="flex whitespace-pre-wrap justify-center mt-4">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="encode-decode">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mesage here
              </label>
              <input value={inputVal} onChange={(event) => { setInputVal(event.target.value); }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Message" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Passphrase
              </label>
              <input value={passw} onChange={(event) => { setPassw(event.target.value); }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Output
              </label>
              <textarea ref={outputRef} value={outputVal} onChange={(event) => { setOutputVal(event.target.value); }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={()=>{encodeMessage()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Encode
            </button>
            <button onClick={()=>{decodeMessage()}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Decode
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EncodeDecodeForm;