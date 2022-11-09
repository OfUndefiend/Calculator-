import React, { useState} from 'react';
import './App.scss';

function App() {
  const [result, setResult] = useState("")
  const handleClick = (value:string) => {
    setResult(result+(value));
  }
  const clear = () => {
    setResult("")
  }
  const backspace = () => {
    console.log(result)
    let strr = result.toString()
   setResult(strr.slice(0, strr.length - 1))
  }
  function evil(fn:any) {
    return new Function('return ' + fn)();
  }
  const output = ()=> {
  setResult(evil(result))
  }
  return (

      <>
        <div className="container">
          <form>
            <input type="text" value={result}/>
          </form>
          <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">Clear</button>
            <button className="highlight" onClick={backspace} id="backspace">C</button>
            <button className="highlight" id="divide" onClick={() => handleClick("/")}>÷</button>
            <button name="7" onClick={() => handleClick("7")}>7</button>
            <button name="8" onClick={() => handleClick("8")}>8</button>
            <button name="9" onClick={() => handleClick("9")}>9</button>
            <button className="highlight" id="times" onClick={() => handleClick("*")}>&times;</button>
            <button name="4" onClick={() => handleClick("4")}>4</button>
            <button name="5" onClick={() => handleClick("5")}>5</button>
            <button name="6" onClick={() => handleClick("6")}>6</button>
            <button className="highlight" name="-" onClick={() => handleClick("-")}>&ndash;</button>
            <button name="1" onClick={() => handleClick("1")}>1</button>
            <button name="2" onClick={() => handleClick("2")}>2</button>
            <button name="3" onClick={() => handleClick("3")}>3</button>
            <button className="highlight" name="+" onClick={() => handleClick("+")}>+</button>
            <button name="0" onClick={() => handleClick("0")}>0</button>
            <button name="." onClick={() => handleClick(".")}>.</button>
            <button className="highlight" name="=" onClick={() => output()}>=</button>
          </div>
        </div>
      </>
  )

}

export default App;
