import { users, conversations } from "./db";

const fetchActiveUser = (username, password) => {
  const activeUser = users.filter(
    user => user.username === username && user.password === password
  );
  return activeUser[0];
};

const fetchConversations = userId => {
  return conversations.filter(chat =>
    chat.participants.filter(user => user.userId === userId)
  );
};

const fetchActiveConversation = (userId, friendId) => {
  const activeConversation = {
    ...conversations.filter(conv => {
      return (
        (conv.participants[0].userId === userId &&
          conv.participants[1].userId === friendId) ||
        (conv.participants[0].userId === friendId &&
          conv.participants[1].userId === userId)
      );
    }),
  };
  return activeConversation;
};
const insertNewMessage = (msg, conv, user) => {
  const updatedMessages = [
    ...conv[0].messages,
    {
      id: conv[0].messages.length + 1,
      userId: user.id,
      content: msg,
    },
  ];
  console.log({ updatedMessages });
  conv[0].messages = updatedMessages;
  console.log("conv to return", conv[0]);
  return conv;
};

export default function reducer(state, action) {
  switch (action.type) {
    case "field": {
      return { ...state, [action.field]: action.value };
    }
    case "login": {
      return {
        ...state,
        isLoading: true,
        activeUser: fetchActiveUser(action.username, action.password),
      };
    }
    case "loginSuccess": {
      return {
        ...state,
        userConversations: fetchConversations(
          action.payload,
          state.activeConversation,
          state.activeUser
        ),
        isLoading: false,
        isLoggedIn: true,
        username: "",
        password: "",
        error: "",
      };
    }

    case "showConversation": {
      return {
        ...state,
        activeConversation: fetchActiveConversation(
          action.userId,
          action.friendId
        ),
      };
    }
    case "newMessage": {
      return {
        ...state,
        activeConversation: insertNewMessage(
          action.msg,
          action.conv,
          action.user
        ),
        input: "",
      };
    }
    case "error": {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      break;
  }
}
