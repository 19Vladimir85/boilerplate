import React from "react"; 
import "./index.css";

const Button = ({ text, onClick, className }) => {
  return (
    <button className={className? className +  " button" : "button"} onClick={onClick}>
      {text}
    </button> 
  );
};


export default Button;