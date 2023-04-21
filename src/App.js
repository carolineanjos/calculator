import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("")


  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch {
      // alert("error")
      setResult("Error")
    }
  }


  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="current-operand">{result}</div>
      </div>
      <button onClick={clear} className="clear">AC</button>
      <button onClick={backspace}>DEL</button>
      <button name="/" onClick={handleClick}>÷</button>
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      <button name="*" onClick={handleClick}>*</button>
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      <button name="+" onClick={handleClick}>+</button>
      <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      <button name="-" onClick={handleClick}>-</button>
      <button name="." onClick={handleClick}>.</button>
      <button name="0" onClick={handleClick}>0</button>
      <button onClick={calculate} className="equal">=</button>
    </div>
  );
}

export default App;