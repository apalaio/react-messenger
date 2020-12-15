import React, { useContext, useState } from "react";

const Login = ({ dispatch, state }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useContext(DispatchContext);
  // const state = useContext(StateContext);

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "login", payload: { username, password } });
    console.log("state.activeUser:", state.activeUser);
    debugger;
    // console.log("state", state);
    if (state.activeUser !== null) {
      dispatch({ type: "loginSuccess", payload: state.activeUser.id });
    } else {
      dispatch({ type: "error" });
    }
    console.log("state", state);
  };

  return (
    <form onSubmit={onSubmit}>
      <b> Please Login</b>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={e => {
          setUsername(e.currentTarget.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        autoComplete="new-password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
