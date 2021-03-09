import React, { useEffect } from "react";

const Login = ({ history }) => {
  useEffect(() => {
    window.onmessage = ({ data }) => {
      if (data.type === "login") {
        if (data.success) {
          history.push({
            pathname: "/profile",
            state: { user: data.user },
          });
        } else {
          alert("login inválido");
        }
      }
    };

    return () => {
      window.onmessage = null;
    };
  }, []);

  return <iframe src="http://localhost:3000/"></iframe>;
};

export default Login;
