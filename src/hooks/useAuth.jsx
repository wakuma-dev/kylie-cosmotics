import { useContext, useCallback } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function useAuth() {
  const { login, logout } = useContext(AuthContext);

  const signIn = useCallback(
    async (email, password) => {
      if (!email || !password) {
        throw new Error("Email and password required");
      }

      // simulate API request
      const userData = {
        id: Date.now(),
        email,
      };

      login(userData);
    },
    [login],
  );

  const signUp = useCallback(
    async (name, email, password) => {
      if (!name || !email || !password) {
        throw new Error("All fields are required");
      }

      const userData = {
        id: Date.now(),
        name,
        email,
      };

      login(userData);
    },
    [login],
  );

  return {
    signIn,
    signUp,
    logout,
  };
}
