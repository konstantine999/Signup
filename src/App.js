import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";

import Signed from "./components/signed/Signed";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function logInOut() {
    setIsLogedIn((prev) => !prev);
  }
  function logOut() {
    setMail("");
    setPassword("");
    logInOut();
  }
  function logIn() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordformat =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; //check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    if (mail.match(mailformat) && password.match(passwordformat)) {
      logInOut();
      setError("");
    } else {
      setError("Please fill out all required fields.");
    }
  }

  return (
    <div className="App">
      {isLogedIn ? (
        <Signed mail={mail} loginout={logOut} />
      ) : (
        <Login
          mail={(e) => setMail(e.target.value)}
          password={(e) => setPassword(e.target.value)}
          isLogedIn={logIn}
          error={error}
        />
      )}
    </div>
  );
}

export default App;
