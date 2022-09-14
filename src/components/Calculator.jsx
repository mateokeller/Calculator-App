import React, { useState } from "react";
import "../App.css";
import Button from "./Button";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const { name } = e.target;
    // const target = ;
    setResult(result.concat(name));
  };

  const clear = (e) => {
    setResult("");
  };

  const backspace = (e) => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handleClick}>
            &divide;
          </button>
          {[7, 8, 9].map((value) => (
            <Button name={value.toString()} clickedNum={handleClick} />
          ))}

          <button className="highlight" name="*" onClick={handleClick}>
            &times;
          </button>
          {[4, 5, 6].map((value) => (
            <Button name={value.toString()} clickedNum={handleClick} />
          ))}
          <button className="highlight" name="-" onClick={handleClick}>
            &ndash;
          </button>
          {[1, 2, 3].map((value) => (
            <Button name={value.toString()} clickedNum={handleClick} />
          ))}
          <button className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <Button name="0" clickedNum={handleClick} />
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
