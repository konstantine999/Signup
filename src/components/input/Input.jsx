import React from "react";

function Input(props) {
  return (
    <div className="input-wrapper">
      <input
        onChange={props.getValue}
        type={props.type}
        placeholder={props.placeholder}
      />
      <img src={props.logo} alt="logo" />
    </div>
  );
}

export default Input;
