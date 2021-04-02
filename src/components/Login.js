import React, { useContext, useEffect } from "react";
import { DispatchContext, StateContext } from "./App";

import "./styling/App.css";

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
      dispatch({ type: "loginSuccess" });
      dispatch({ type: "fetchConversations", payload: activeUser.id });
    }
  }, [isLoading]);

  return !isLoggedIn ? (
    <form onSubmit={onSubmit} className="login-form">
      <b> Please Login </b>
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
  ) : (
    <div className="login-form"></div>
  );
};

export default Login;
