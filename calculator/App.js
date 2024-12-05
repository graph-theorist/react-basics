import React, { useState, useRef } from 'react';
import Joyride from 'react-joyride';
import "./App.css";

const steps = [
  {
    target: '.numericalInput',
    content: 'Type a number',
  },
  {
    target: '.plus',
    content: 'Press for one of the basic operations of arithmetic',
  },
  {
    target: '.clearInput',
    content: 'Clear the number entered',
  },
  {
    target: '.clearResult',
    content: 'Clear the current result',
  }
];

export default function App() {
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault();
    if (inputRef.current.value === "0") {
      alert("Cannot divide by zero!");
    } else {
      setResult((result) => result / Number(inputRef.current.value));
    }
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = null;
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
  	setResult(0);
  };

  return (
    <div className="App">
      <Joyride steps={steps} />
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number"
          className = "numericalInput"
        /> 
        <button onClick={plus} className="plus" >add</button> 
        <button onClick={minus}>minus</button> 
        <button onClick={times}>times</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput} className="clearInput">reset input</button> 
        <button onClick={resetResult} className="clearResult">reset result</button> 
      </form>
    </div>
  );
}