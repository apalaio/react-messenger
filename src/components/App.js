import Login from "./Login";
import React, { useReducer, createContext } from "react";
import reducer from "../reducer";

import "./App.css";
export const StateContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  activeUser: null,
  isLoggedIn: false,
  isLoading: false,
  userConversations: [],
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
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
