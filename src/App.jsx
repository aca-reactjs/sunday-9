import { useState, useRef, useEffect, useReducer } from "react";
import "./App.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    case "multiply":
      return { count: state.count * action.payload.number };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>null</button>
      <button
        onClick={() => dispatch({ type: "multiply", payload: { number: 2 } })}
      >
        x 2
      </button>
      <button
        onClick={() => dispatch({ type: "multiply", payload: { number: 3 } })}
      >
        x 3
      </button>
    </>
  );
}

export default App;
