import React, { useState, useEffect, useCallback } from "react";

// import { useGlobalDispatch, useGlobalState } from "./Mediator";
import { useGlobalState } from "./state/hooks";
export default () => {
  const { getState, setState } = useGlobalState();
  const person = getState("person");
  console.log("PERSON", person);
  useEffect(() => console.log(`COUNt IS: ${null}`));
  return (
    <div>
      <button onClick={() => setState("person.age", person.age + 1)}>
        Increase Age Value
      </button>
    </div>
  );
};
