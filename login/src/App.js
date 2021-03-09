import React, { useState } from "react";

import { logins } from "./mock";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = logins.find((login) => login.username === username);

    if (user && user.password === password) {
      window.top.postMessage({ type: "login", success: true, user }, "*");
    } else {
      window.top.postMessage({ type: "login", success: false }, "*");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <br />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <br />
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </>
  );
};

export default App;
