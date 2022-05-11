import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [calc, setCalc] = useState("");
  const [secondCalc, setSecondCalc] = useState("");
  
  const handleClick = value  => {
    
    switch(value){
      case 'DEL':
        let stringDel = String(secondCalc);
        setSecondCalc(stringDel.slice(0, -1));
        break;
      case 'AC':
        setCalc("");
        setSecondCalc("");
        break;
      // case '+':
      //   setSecondCalc(calc + '+');
      //   setCalc("")
      //   break;
      //   case '-':
      //   setSecondCalc(calc + '-');
      //   setCalc("")
      //   break;
      //   case '*':
      //   setSecondCalc(calc + '*');
      //   setCalc("");
      //   break;
      //   case '/':
      //   setSecondCalc(calc + '/');
      //   setCalc("")
      //   break;
        
      case "=":
        
        try{
        setCalc(eval(secondCalc.toString()));
        setSecondCalc("");}
        catch{
          setSecondCalc("");
          setCalc("Error");
        }
        
        break;
      case 'ANS':
        let answer = calc;
        setSecondCalc(answer);
        break;
      default: 
        setSecondCalc(secondCalc + value);
        break;
    }
  }
  
  return (
    <main>
      <div className="calculator-grid">
        <div className="output">
            <div className="previous-operand">{ calc }</div>
            <div className="current-operand">{ secondCalc }</div>
        </div>
        <button className="span-two button" onClick={() => handleClick("AC")}>AC</button>
        <button className="button" onClick={() => handleClick("DEL")}>DEL</button>
        <button className="button" onClick={() => handleClick("/")}>/</button>
        <button className="button" onClick={() => handleClick("1")}>1</button>
        <button className="button" onClick={() => handleClick("2")}>2</button>
        <button className="button" onClick={() => handleClick("3")}>3</button>
        <button className="button" onClick={() => handleClick("*")}>*</button>
        <button className="button" onClick={() => handleClick("4")}>4</button>
        <button className="button" onClick={() => handleClick("5")}>5</button>
        <button className="button" onClick={() => handleClick("6")}>6</button>
        <button className="button" onClick={() => handleClick("+")}>+</button>
        <button className="button" onClick={() => handleClick("7")}>7</button>
        <button className="button" onClick={() => handleClick("8")}>8</button>
        <button className="button" onClick={() => handleClick("9")}>9</button>
        <button className="button" onClick={() => handleClick("-")}>-</button>
        <button className="button" onClick={() => handleClick(".")}>.</button>
        <button className="button" onClick={() => handleClick("0")}>0</button>
        <button className="button" onClick={() => handleClick("=")}>=</button>
        <button className="button" onClick={() => handleClick("ANS")}>ANS</button>
    </div>
    </main>
  );
}

export default App;