import React, { useContext } from "react";
import { DispatchContext, StateContext } from "./App";

const InputField = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const submit = e => {
    e.preventDefault();
    console.log("this ran");
    //the user triggering this will be the "activeUser" in every case
    dispatch({
      type: "newMessage",
      msg: state.input,
      conv: state.activeConversation,
      user: state.activeUser,
    });
  };

  return (
    <form onSubmit={submit}>
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
      <button>Send</button>
    </form>
  );
};

export default InputField;
