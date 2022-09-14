import React, { useState } from "react";
import "../App.css";
import Button from "./Button";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    console.log(e.target.name);
  };

  const handleDigit = (e) => {
    setResult(result.concat());
    console.log(e.target.id);
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
          <button className="highlight" name="&divide;" onClick={handleClick}>
            &divide;
          </button>
          {[7, 8, 9].map((value, index) => (
            <Button
              key={value}
              id={value}
              name={value.toString()}
              value={value.toString()}
              clickedNum={handleDigit}
            />
          ))}
          {/* {addRow()} */}
          <button className="highlight" name="x" onClick={handleClick}>
            &times;
          </button>
          {[4, 5, 6].map((value) => (
            <Button
              key={value}
              id={value}
              name={value.toString()}
              value={value.toString()}
              onClick={handleClick}
            />
          ))}
          <button className="highlight" name="-" onClick={handleClick}>
            &ndash;
          </button>
          {[1, 2, 3].map((value) => (
            <Button
              key={value}
              id={value}
              name={value.toString()}
              value={value.toString()}
              onClick={handleClick}
            />
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
