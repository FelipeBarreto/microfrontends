import React, { useState } from "react";

import { users } from "./data";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = users.find((d) => d.email === username);

    if (user && user.password === password) {
      window.top.postMessage({ type: "login", success: true, user }, "*");
    } else {
      window.top.postMessage({ type: "login", success: false }, "*");
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </section>
  );
};

export default App;
