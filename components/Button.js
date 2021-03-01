import React from "react";

const Button = ({ handleClick }) => {
  return <button onClick={() => handleClick()}>Click for a new joke...</button>;
};

export default Button;
