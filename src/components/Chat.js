import React, { useContext } from "react";
import { StateContext } from "./App";

import "./styling/App.css";

const Chat = () => {
  const state = useContext(StateContext);

  return state.activeConversation ? (
    <ul className="chat">
      {state.activeConversation.messages.map(msg => (
        <li key={msg.id}>
          <span className="sender-name">
            {
              state.activeConversation.participants.find(
                p => p.userId === msg.userId
              ).username
            }
          </span>
          <span>{msg.content}</span>
        </li>
      ))}
    </ul>
  ) : (
    <div></div>
  );
};

export default Chat;
