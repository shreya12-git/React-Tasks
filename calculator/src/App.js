import React, { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Card from './components/Card';


function App() {
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState('');

  const handleClick = (value) => {
  //   switch (value) {
  //     case "=": {
  //       if (inputValue !== "") {
  //         try {
  //           const ans = eval(inputValue);
  //           setOutputValue(ans);
  //         } catch (err) {
  //           setOutputValue("Math Error");
  //         }
  //       }
  //       setInputValue('');
  //       break;
  //     }
  //     case "Clear": {
  //       setInputValue('');
  //       setOutputValue('');
  //       break;
  //     }
  //     case "Delete": {
  //       setInputValue(inputValue.slice(0, -1));
  //       break;
  //     }
  //     default: {
  //       setInputValue(inputValue + value);
  //       break;
  //     }
  //   }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="screen">
          <Card ></Card> 
        </div>
        <div className="button-part">
          <div className="button-row">
            <Buttons label={7} onClick={() => handleClick(7)} />
            <Buttons label={8} onClick={() => handleClick(8)} />
            <Buttons label={9} onClick={() => handleClick(9)} />
            <Buttons label={'-'} onClick={() => handleClick('-')} />
          </div>
          <div className="button-row">
            <Buttons label={4} onClick={() => handleClick(4)} />
            <Buttons label={5} onClick={() => handleClick(5)} />
            <Buttons label={6} onClick={() => handleClick(6)} />
            <Buttons label={'÷'} onClick={() => handleClick('÷')} />
          </div>
          <div className="button-row">
            <Buttons label={1} onClick={() => handleClick(1)} />
            <Buttons label={2} onClick={() => handleClick(2)} />
            <Buttons label={3} onClick={() => handleClick(3)} />
            <Buttons label={'*'} onClick={() => handleClick('*')} />
          </div>
          <div className="button-row">
            <Buttons label={0} onClick={() => handleClick(0)} />
            <Buttons label={'.'} onClick={() => handleClick('.')} />
            <Buttons label={'='} onClick={() => handleClick('=')} />
            <Buttons label={'+'} onClick={() => handleClick('+')} />
          </div>
          <div className="button-row">
            <Buttons label={"Clear"} onClick={() => handleClick("Clear")} />
            <Buttons label={"Delete"} onClick={() => handleClick("Delete")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
