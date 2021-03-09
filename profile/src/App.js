import React from "react";

const defaultUser = {
  email: "felipe.barreto@osf.digital",
  password: "fit123",
  name: "Felipe",
  surname: "Barreto",
  age: "29",
  github: "https://github.com/FelipeBarreto",
};

const App = ({ user = defaultUser }) => {
  console.log(user);
  return (
    <section>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Email {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Github: {user.github}</p>
    </section>
  );
};

export default App;
