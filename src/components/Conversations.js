import React, { useContext } from "react";
import { DispatchContext, StateContext } from "./App";

import "./styling/App.css";

const Conversations = () => {
  const { userConversations, activeUser } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const friends = userConversations
    .map(conv => conv.participants)
    .flat()
    .filter(user => user.userId !== activeUser.id);

  const showConversation = friendId => {
    dispatch({ type: "showConversation", friendId, userId: activeUser.id });
  };

  return (
    <div className="conversations">
      <h2>Contacts</h2>
      <ul>
        {friends.map(friend => (
          <li
            key={friend.userId}
            onClick={() => {
              showConversation(friend.userId);
              dispatch({ type: "clearInput" });
            }}
          >
            {friend.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conversations;
