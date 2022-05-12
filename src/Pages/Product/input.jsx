import React, { useState, useRef } from 'react';


function CustomInput(props) {
  const [inputValue, setInputValue] = useState("");
  const getInput = useRef(null);
  console.log(props)
  console.log(getInput.current)
  return (
    <div className="custom-input">

      <input
        ref={getInput}
        defaultValue={props.defaultValue}
        maxLength={props.maxLength}
        onChange={(e) => setInputValue(e.target.value)} />

      <span> {getInput.current.value.length}/{getInput.current.maxLength} </span>
    </div>
  );
}

export default CustomInput;