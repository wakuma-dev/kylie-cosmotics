import React, { useReducer, createContext } from "react";

export const RouteContext = createContext(null);

const initialState = {
  history: ["/"],
  index: 0,
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
      };
    }

    case "GOBACK": {
      if (state.index === 0) return state;

      return {
        ...state,
        index: state.index - 1,
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
