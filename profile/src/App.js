import React from "react";

const App = ({
  user = {
    username: "nonato",
    password: "111",
    name: "Nonato",
    surname: "Dias",
    age: "27",
    email: "nonato.dias@osf.digital",
  },
}) => {
  return (
    <section>
      <p>Nome: {user.name}</p>
      <p>Sobrenome: {user.surname}</p>
      <p>Idade: {user.age}</p>
      <p>email: {user.email}</p>
    </section>
  );
};

export default App;
