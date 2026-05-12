import React, { createContext, useState } from "react";

export const SearchContext = createContext(null);

export default function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery, input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
}
