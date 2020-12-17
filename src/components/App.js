import Login from "./Login";
import React, { useReducer, createContext } from "react";
import reducer from "../reducer";
import Conversations from "./Conversations";
import Chat from "./Chat";
import InputField from "./InputField";

// import "./styling/App.css";

export const StateContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  activeUser: null,
  isLoggedIn: false,
  isLoading: false,
  userConversations: [],
  activeConversation: null,
  input: "",
  username: "",
  password: "",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="App">
          <Login />
          {state.isLoggedIn ? (
            <div className="container">
              <Conversations />
              <Chat />
              <InputField />
            </div>
          ) : (
            <div />
          )}
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
