import React, { createContext, useContext, useReducer } from "react";
import { myReducer } from "./Reducer";

export const StateContext = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, {
    user: null,
  });
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default Context;
export const myState = () => {
  return useContext(StateContext);
};
