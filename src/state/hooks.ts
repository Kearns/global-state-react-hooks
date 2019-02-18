import React, { Dispatch } from "react";
import { StateContext, DispatchContext } from "./contexts";
import { getOr } from "lodash/fp";

export const useGlobalDispatch = () => {
  return React.useContext(DispatchContext);
};

interface IUseGlobalState {
  getState: (path: string, defaultValue?: any) => IGlobalState;
  setState: (path: string, value: any) => void;
  addStore: (name: string, value: any) => void;
}

interface IGlobalState {
  [key: string]: any;
}

export const useGlobalState = (): IUseGlobalState => {
  const state = React.useContext(StateContext);
  const dispatch = useGlobalDispatch();
  return {
    getState: (path: string, defaultValue: any = undefined): IGlobalState =>
      getOr(defaultValue, path, state),
    setState: (path: string, value: any): void =>
      dispatch({
        type: "UPDATE_STATE",
        path: "test",
        payload: { value, path }
      }),
    addStore: (name: string, value: any): void =>
      dispatch({
        type: "ADD_STORE",
        payload: { name, value }
      })
  };
};
