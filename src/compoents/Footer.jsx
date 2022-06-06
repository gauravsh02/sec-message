import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-white bg-green-600" id="about">
      <div className="container pl-8 pr-8 pt-2 pb-2">
        <div className="text-center">
          Hi,
          This is a simple Encryption and Decryption app based on <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar cipher</a> it uses message and a password to encrypt the message.
          The message can be passed but can only be decoded with the password. Try it.....
        </div>
      </div>
      <div className="bg-green-700">
        <p className='text-center pl-8 pr-8 pt-2 pb-2'>
          Sugession and feedback
          <a className='inline-block ml-2 mt-4' href="mailto:gauravashankar.bk@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
            </svg>
          </a>
          <a className='inline-block ml-2 mt-4' href="https://github.com/gauravsh02/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;