import React, { Dispatch } from "react";
import { StateContext, DispatchContext } from "./contexts";
import { getOr } from "lodash/fp";

interface IUseGlobalState {
  getState: (path?: string, defaultValue?: any) => GlobalState;
  setState: (path: string, value: any) => void;
  addStore: (name: string, value: any) => void;
}

type GlobalState = {
  [key: string]: any;
};

export const useGlobalDispatch = (): React.Dispatch<any> => {
  return React.useContext(DispatchContext);
};

export const useGlobalState = (): IUseGlobalState => {
  const state = React.useContext(StateContext);
  const dispatch = useGlobalDispatch();
  return {
    getState: (path: string = "", defaultValue: any = undefined): GlobalState =>
      path === "" ? state : getOr(defaultValue, path, state),
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
