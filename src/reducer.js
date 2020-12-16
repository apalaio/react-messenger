import { users, conversations } from "./db";

const fetchActiveUser = (username, password) => {
  console.log("username, password", username, password);
  const activeUser = users.filter(
    x => x.username === username && x.password === password
  );
  return activeUser[0];
};

const fetchConversations = userId => {
  return conversations.filter(chat =>
    chat.participants.filter(user => user.userId === userId)
  );
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
        userConversations: fetchConversations(action.payload),
        isLoading: false,
        isLoggedIn: true,
        error: "",
      };
    }
    case "error": {
      return { ...state, isLoading: false, error: "User was not found" };
    }

    default:
      break;
  }
}
