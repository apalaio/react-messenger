import React, { useContext } from "react";
import { StateContext } from "./App";

const Chat = () => {
  const state = useContext(StateContext);
  console.log("activeConversation (chat comp):", state.activeConversation);

  return state.activeConversation ? (
    <ul>
      {state.activeConversation[0].messages.map(msg => (
        <li key={msg.id}>
          <span>{msg.userId}</span>
          <span>{msg.content}</span>
        </li>
      ))}
    </ul>
  ) : (
    <div></div>
  );
};

export default Chat;
