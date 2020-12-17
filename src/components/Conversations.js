import React, { useContext } from "react";
import { DispatchContext, StateContext } from "./App";

import "./styling/Conversation.css";

const Conversations = () => {
  const { userConversations, activeUser } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const friends = userConversations
    .map(conv => conv.participants)
    .flat()
    .filter(x => x.userId !== activeUser.id);

  const showConversation = friendId => {
    dispatch({ type: "showConversation", friendId, userId: activeUser.id });
  };

  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.userId} onClick={() => showConversation(friend.userId)}>
          {friend.username}
        </li>
      ))}
    </ul>
  );
};

export default Conversations;
