import React from "react";
import "../App.css";

function Button(props) {
  const handleClick = () => {
    props.clickedNum();
    console.log("clicked");
  };

  return (
    <button name={props.value} onClick={handleClick}>
      {props.name}
    </button>
  );
}

export default Button;
