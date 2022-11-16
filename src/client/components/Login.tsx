import React, { JSXElementConstructor, useEffect, useState } from "react";
// import pothosGif from '../assets/walking-pothos.gif';
import { LoginProps } from "../../types/front-end";

export const Login = ({ loginHandler }: LoginProps): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signup, toggleSignUp] = useState(false);
  // useState for username/password
  // Separate login/signup, set signup status as a state variable as well
  // handleClick fxn for signup
  const handleClick = () => {
    let action;
    if (signup) action = "signup";
    else action = "login";
    const url = "/api/" + action;
    fetch(url, {
      method: "POST",
      // credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => {
      loginHandler(username);
      return;
    });
  };
  return (
    <div>
      <h1>Welcome to Nourish</h1>
      <img src="https://media.giphy.com/media/WovJhL7QEpy6yBTMro/giphy.gif"></img>
      <div className="LoginDiv">
        <label>username: </label>
        <input
          type="text"
          className="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <label>password: </label>
        <input
          type="text"
          className="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="loginSubmit">
        <input
          type="submit"
          aria-label="loginButton"
          onClick={() => {
            handleClick();
          }}
          className="loginButton"
        />
      </div>
      {signup ? (
        <div>
          <p>Sign Up</p>
          <button
            className="signupButton"
            onClick={() => {
              toggleSignUp(false);
            }}
          >
            Return to Login
          </button>
        </div>
      ) : (
        <div className="signupToggle">
          {" "}
          <p>Sign Up Instead</p>
          <button
            className="signupButton"
            onClick={() => {
              toggleSignUp(true);
            }}
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};
