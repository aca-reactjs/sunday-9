import { useState, useRef, useEffect, useReducer } from "react";
import "./App.css";

const requestStatus = {
  initial: "initial",
  loading: "loading",
  error: "error",
  fulfilled: "fulfilled",
};

const initialState = {
  status: requestStatus.initial,
  data: null,
  error: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case requestStatus.initial:
      return initialState;

    case requestStatus.loading:
      return { ...state, status: requestStatus.loading };

    case requestStatus.fulfilled:
      return { ...state, data: payload.data, status: requestStatus.fulfilled };

    case requestStatus.error:
      return { ...state, status: requestStatus.error, error: payload.error };

    default:
      throw new Error();
  }
}

function App() {
  const [{ status, data, error }, dispatch] = useReducer(
    reducer,
    initialState,
    (state) => {
      return { ...state, status: requestStatus.loading };
    }
  );

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/name/aruba?fullText=true"
        );

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.message);
        }

        dispatch({ type: requestStatus.fulfilled, payload: { data: json } });
      } catch (err) {
        dispatch({
          type: requestStatus.error,
          payload: { error: { message: err.message } },
        });
      }
    })();
  }, []);

  if (status === requestStatus.loading) {
    return <div>loading</div>;
  }

  if (status === requestStatus.error && error?.message) {
    return <div>{error.message}</div>;
  }

  return status === requestStatus.fulfilled && data?.length ? (
    <div>{JSON.stringify(data)}</div>
  ) : null;
}

export default App;
