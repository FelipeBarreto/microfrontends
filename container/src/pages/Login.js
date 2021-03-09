import React, { useEffect } from "react";

const Login = ({ history }) => {
  useEffect(() => {
    window.onmessage = ({ data }) => {
      if (data.type === "login" && data.success) {
        history.push({ pathname: "/profile", state: { user: data.user } });
      } else if (data.type === "login" && !data.success) {
        console.log("login inválido");
      }
    };

    return () => {
      window.onmessage = null;
    };
  }, []);
  return <iframe src="http://localhost:3001"></iframe>;
};

export default Login;
