import React from "react";

function Display({ input, setInput, answer }) {
  return (
    <div className="display">
      {answer === "" ? (
        <>
          <input
            type="text"
            name="input"
            className="input"
            style={{ padding: "29px" }}
            value={input}
            placeholder="0"
            maxLength={12}
            autoComplete="off"
          />
        </>
      ) : (
        <>
          <input
            type="text"
            name="input"
            className="value"
            value={input}
            placeholder="0"
            maxLength={12}
            disabled
          />
          <input
            type="text"
            name="value"
            className="input"
            value={answer}
            disabled
          />
        </>
      )}
    </div>
  );
}

export default Display;
