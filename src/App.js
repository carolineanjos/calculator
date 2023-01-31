import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState("")
  const [secondNumber, setSecondNumber] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState(0)

  const number = [1,2,3,4,5,6,7,8,9]
  const operations = ["+","-","*","/"]

  
  const clickNumbers = (val) => {
    if(operation === ""){
      setFirstNumber(firstNumber + val)
    } else {
      setSecondNumber(secondNumber + val)
    }
  }
  
  const clickOperation = (val) => {
    setOperation(val)
  }

  const performOperation = () => {
    switch(operation){
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber))
        break;
      case "-":
        setResult(Number(firstNumber) - Number(secondNumber))
        break;
      case "*":
        setResult(Number(firstNumber) * Number(secondNumber))
        break;
      case "/":
        setResult(Number(firstNumber) / Number(secondNumber))
        break;
        default: console.log("nothing")
    }
  }

  // useEffect(() => {
  // console.log(result)
  // },[result])
  
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{result}</div>
        <div className="buttons">
          <div className="leftSide">
            <div id="seeResult" onClick={performOperation}>See Result</div>
            <div className="numbers">
              {number.map((val, key) => {
               return <div id="individualNumber" onClick={() => clickNumbers(val)}>{val}</div>
              })}
          </div>
        </div>
          <div className="leftSide">
            {operations.map((val,key) => {
              return <div id="operations" onClick={() => clickOperation(val)}>{val}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
