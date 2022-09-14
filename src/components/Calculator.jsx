import React, { useState } from "react";
import Button from "./Button";
import "../App.css";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const name = e.target;
    setResult(result.concat(e.target.name));
  };

  const clear = (e) => {
    setResult("");
  };

  const backspace = (e) => {
    setResult(result.slice(0, -1));
  };

  // return math calculation

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="keypad"></div>
      <button className="highlight" onClick={clear} id="clear">
        Clear
      </button>
      <button className="highlight" onClick={backspace} id="backspace">
        C
      </button>
      <button className="highlight" name="/" onClick={handleClick}>
        &divide;
      </button>
      <Button className="digits" clickedNum={handleClick} />
      <Button className="digits" clickedNum={handleClick} />
      <Button className="digits" clickedNum={handleClick} />
      <button className="highlight" name="*" onClick={handleClick}>
        &times;
      </button>

      <button className="highlight" name="-" onClick={handleClick}>
        &ndash;
      </button>

      <button className="highlight" name="+" onClick={handleClick}>
        +
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button name="." onClick={handleClick}>
        .
      </button>
      <button className="highlight" onClick={calculate} id="result">
        =
      </button>
    </div>
  );
}

export default Calculator;
