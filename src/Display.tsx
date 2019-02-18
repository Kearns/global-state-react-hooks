import React, { useState, useEffect, useCallback } from "react";

import { useGlobalDispatch, useGlobalState } from "./state/hooks";
export default () => {
  const { getState, addStore } = useGlobalState();
  const dispatch = useGlobalDispatch();
  if (!getState("newStore")) addStore("newStore", { test: "working" });
  const state = getState();
  return <div>State: {`${JSON.stringify(state, null, 2)}`}</div>;
};
