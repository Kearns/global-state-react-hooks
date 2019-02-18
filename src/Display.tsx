import React, { useState, useEffect, useCallback } from "react";

import { useGlobalDispatch, useGlobalState } from "./state/hooks";
export default () => {
  const { getState } = useGlobalState();
  const dispatch = useGlobalDispatch();
  if (!getState("newStore"))
    dispatch({
      type: "ADD_STORE",
      payload: { name: "newStore", value: { test: "working" } }
    });
  const person = getState("person");
  return <div>{person.age}</div>;
};
