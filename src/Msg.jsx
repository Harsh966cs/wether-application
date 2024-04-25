// MessageComponent.js
import React from 'react';

const MessageComponent = ({ showMessage }) => {
  return (
    <div  className='bg-black text-cyan-50 align-middle justify-center flex text-lg '>
        <div className={`message ${showMessage ? 'show' : 'hide'} `}>
      <h1 className='para'>Screen size is too small. Changes may not apply properly. 
      </h1>
      <p  className='bg-black text-cyan-50 align-middle justify-center flex text-sm '>
        Use Desktop Mode
      </p>
      
    </div>
    </div>

   
  );
};

export default MessageComponent;
