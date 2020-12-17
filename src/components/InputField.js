import React, { useContext } from "react";
import { DispatchContext, StateContext } from "./App";

import "./styling/App.css";

const InputField = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const submit = e => {
    e.preventDefault();
    //the user triggering this will be the "activeUser" in every case
    dispatch({
      type: "newMessage",
    });
  };

  return (
    <form onSubmit={submit} className="input-form">
      <input
        type="text"
        value={state.input}
        onChange={e =>
          dispatch({
            type: "field",
            field: "input",
            value: e.currentTarget.value,
          })
        }
      ></input>
      {state.activeConversation ? <button>Send</button> : <div></div>}
    </form>
  );
};

export default InputField;
