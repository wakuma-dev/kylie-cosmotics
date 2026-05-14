import React, { useReducer, createContext } from "react";

export const RouteContext = createContext(null);

const initialState = {
  history: ["/"],
  index: 0,
  current: "/",
};

function reducer(state, action) {
  switch (action.type) {
    case "NAVIGATE": {
      const newHistory = [
        ...state.history.slice(0, state.index + 1),
        action.payload,
      ];

      return {
        history: newHistory,
        index: newHistory.length - 1,
        current: action.payload,
      };
    }

    case "GOBACK": {
      if (state.index === 0) return state;

      const newIndex = state.index - 1;
      return {
        ...state,
        index: newIndex,
        current: state.history[newIndex],
      };
    }

    default:
      return state;
  }
}

export default function RouteProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RouteContext.Provider value={{ state, dispatch }}>
      {children}
    </RouteContext.Provider>
  );
}
