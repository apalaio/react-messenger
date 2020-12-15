import Login from "./Login";
import { useReducer, createContext } from "react";
import { users, conversations } from "../db.js";

import "./App.css";
// const StateContext = createContext();
// const DispatchContext = createContext();

const fetchActiveUser = (username, password) => {
  console.log("username, password", username, password);
  const activeUser = users.filter(
    x => x.username === username && x.password === password
  );
  console.log({ activeUser });
  return activeUser;
};

const fetchConversations = userId => {
  return conversations.filter(chat =>
    chat.participants.filter(user => user.userId === userId)
  );
  // conversations.forEach(chat => {
  //   if (chat.participants.includes(username)) {
  //     userConversations = [...userConversations, chat];
  //   }
  // });
};

function reducer(state, action) {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        activeUser: fetchActiveUser(
          action.payload.username,
          action.payload.password
        ),
      };
    }
    case "loginSuccess": {
      return {
        ...state,
        userConversations: fetchConversations(action.payload),
      };
    }
    case "error": {
      return { ...state, error: "User was not found" };
    }

    default:
      break;
  }
}

const initialState = {
  activeUser: null,
  userConversations: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Login dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
