import React from "react";
import "./login.css";
import Input from "../input/Input";
import Button from "./Button";
import userTopLogo from "../../photos/Vector.png";
import Eye from "../../photos/Eye.png";
import userLogo from "../../photos/userlogo.png";
function Login(props) {
  return (
    <div className="login-wrapper">
      <div className="user-top-wrapper">
        <img src={userTopLogo} alt="userLogo" />
      </div>
      <h1>Login</h1>
      <p>Hello My Friend</p>
      <Input
        getValue={props.mail}
        type="email"
        placeholder="Email"
        logo={userLogo}
      />
      <Input
        getValue={props.password}
        type="password"
        placeholder="Password"
        logo={Eye}
      />
      <h3>{props.error}</h3>
      <Button isLogedIn={props.isLogedIn} text="LOG IN" />
    </div>
  );
}

export default Login;
