import React, { useContext, useEffect } from "react";
import { DispatchContext, StateContext } from "./App";

const Login = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  let { username, password, isLoading, activeUser, isLoggedIn } = state;

  const onSubmit = e => {
    e.preventDefault();
    if (isLoggedIn) {
      alert("You are already signed in");
    } else {
      try {
        dispatch({ type: "login", username, password });
      } catch {
        dispatch({ type: "error", payload: "User not found" });
      }
    }
  };

  useEffect(() => {
    if (isLoading) {
      dispatch({ type: "loginSuccess", payload: activeUser.id });
    }
  }, [isLoading]);

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
      <button type="submit" disabled={isLoading}>
        Log in
      </button>
    </form>
  );
};

export default Login;
