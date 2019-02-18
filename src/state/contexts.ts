import { createContext } from "react";

export const StateContext = createContext<any>({});
export const DispatchContext = createContext((() => 0) as React.Dispatch<any>);
