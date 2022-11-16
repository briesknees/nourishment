import React, { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { Arboretum } from "./components/Arboretum";
// import { LoginProps } from '../types/front-end';

export interface LoginProps {
  loginHandler: (username: string) => any;
}

const App = () => {
  // Save in state user Logged In status
  // Logged in Status will toggle screen between log in or arboretum page
  const [LoggedIn, toggleLogIn] = useState(false);
  const [username, setUsername] = useState("");

  // Passing Login Handler as a prop to <Login/>; when user clicks on submit/login, the state variable will change to true;
  const loginHandler = (username: string) => {
    setUsername(username);
    toggleLogIn(true);
  };

  return (
    // If logge in, render Arboretum component; else render Login Component
    <div className="Home">
      {LoggedIn ? <Arboretum /> : <Login loginHandler={loginHandler} />}
    </div>
  );
};

export default App;

// import React from 'react'

// class App extends React.Component
// {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: ''
//         }
//     }

//     render() {
//         console.log("Rendering App")
//         return (
//             <h1>{this.state.title}</h1>
//         )
//     }

//     componentDidMount() {
//         fetch('http://localhost:8080', {
//             headers: {'Content-Type': 'application/json' },
//         })
//         .then(res => { return res.json() })
//         .then((titleObj) => {
//             return this.setState ({
//                 title: titleObj.title
//             })})
//         .catch(err => console.log(`App.componentDidMount: get title ERROR: ${err}`));
//     }

// }

// export default App;
