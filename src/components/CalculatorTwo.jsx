import React, { useState } from "react";
import "../App.css";
import Button from "./Button";

function CalculatorTwo() {
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
    // var operators = {
    //   "+": function (x, y) {
    //     return x + y;
    //   },
    //   "-": function (x, y) {
    //     return x - y;
    //   },
    //   "/": function (x, y) {
    //     return x / y;
    //   },
    //   "*": function (x, y) {
    //     return x * y;
    //   },
    // };
    // switch (operators) {
    //   case '+':
    // }
    // try {
    //   // eslint-disable-next-line no-eval
    //   setResult(eval(result));
    // } catch (err) {
    //   setResult("Error");
    // }
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
          <button
            className="highlight"
            id="divide"
            name="/"
            onClick={handleClick}
          >
            &divide;
          </button>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((value) => {
            return <Button key={value} name={value} clickedNum={handleClick} />;
          })}

          <button
            className="highlight"
            id="times"
            name="*"
            onClick={handleClick}
          >
            &times;
          </button>

          <button
            className="highlight"
            id="substract"
            name="-"
            onClick={handleClick}
          >
            &ndash;
          </button>

          <button
            className="highlight"
            id="addition"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <Button name="0" id="zero" clickedNum={handleClick} />
          <button name="." id="decimal" onClick={handleClick}>
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
export default CalculatorTwo;
