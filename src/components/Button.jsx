import React from "react";
import "../App.css";

function Button(props) {
  const handleClick = (e) => {
    props.clickedNum(e);
  };

  return (
    <button name={props.name} onClick={handleClick}>
      {props.name}
    </button>
  );
}

export default Button;
