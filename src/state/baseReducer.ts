
import { clone, setWith, curry } from "lodash/fp";

export type Action = {
  type: string;
  payload?: { path?: string; value?: any; [key: string]: any };
  [key: string]: any;
};

const setIn = curry((path: string = "", value: any, obj: any) =>
  setWith(clone, path, value, clone(obj))
);

const reducer = (state: any, action: Action) => {
  const { type, payload } = action;
  if (!payload) {
    return state;
  }
  switch (type) {
    case "UPDATE_STATE":
      return setIn(payload.path, payload.value, state);
    case "ADD_STORE":
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
};

export default reducer;
