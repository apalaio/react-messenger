import React, { useContext, useEffect } from "react";
import { DispatchContext, StateContext } from "./App";

const Login = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  let { username, password } = state;

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "login", username, password });
    console.log("state.activeUser:", state.activeUser);
  };

  useEffect(() => {
    if (state.isLoading) {
      dispatch({ type: "loginSuccess", payload: state.activeUser.id });
    } else {
      dispatch({ type: "error" });
    }
    console.log("state", state);
  }, [state.isLoading]);

  return (
    <form onSubmit={onSubmit}>
      <b> Please Login</b>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={e =>
          dispatch({
            type: "field",
            field: "username",
            value: e.currentTarget.value,
          })
        }
      />
      <input
        type="password"
        placeholder="password"
        autoComplete="new-password"
        value={password}
        onChange={e =>
          dispatch({
            type: "field",
            field: "password",
            value: e.currentTarget.value,
          })
        }
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
