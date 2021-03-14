import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') setText('Hello world');
    else setText('random title');
  };

  return (
    <>
      <h1>{text}</h1>
      <button ttpe='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
