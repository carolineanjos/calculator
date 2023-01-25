import './App.css';

function App() {
  const number = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="App">
      <div className="calculator">
        <div className="leftSide">
        <div></div>
        <div className="numbers">
          {number.map((val, key) => {
           return <div id="individualNumber">{val}</div>
          })}
        </div>
        </div>
        <div className="RightSide"></div>
      </div>
    </div>
  );
}

export default App;
