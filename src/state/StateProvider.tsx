import React from "react";
import { DispatchContext, StateContext } from "./contexts";
import reducer from "./baseReducer";

interface IMediatorContextProvider {
  render: Function;
  initialState: any;
}

export const StateProvider = ({ render, initialState }: IMediatorContextProvider) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{render()}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default StateProvider;
