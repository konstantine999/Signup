import React from "react";
import "../login/Login";
import userTopLogo from "../../photos/Vector.png";
import UserAvatar from "../../photos/user-avatar.png";
import Button from "../login/Button";

function Signed(props) {
  return (
    <div className="login-wrapper">
      <div className="user-top-wrapper">
        <img src={userTopLogo} alt="userLogo" />
      </div>
      <p>{props.mail}</p>
      <div className="user-avatar-wrapper">
        <img src={UserAvatar} alt="useravatar" />
      </div>
      <Button
        isLogedIn={props.loginout}
        text="LOG OUT"
        className="logout-button"
      />
    </div>
  );
}

export default Signed;
