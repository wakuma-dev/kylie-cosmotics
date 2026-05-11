import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from "../../components/ui/Button";
import { NavLink } from "react-router-dom";

export default function Login() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-auto lg:min-h-[80vh]">
      <h2 className="text-[34px] leading-[37px] font-bold font-serif tracking-tight">
        Login
      </h2>

      <form
        onSubmit={handleLogin}
        className="w-full lg:w-[400px] flex flex-col gap-3"
      >
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="px-6 py-1.5 bg-white rounded-md placeholder:text-xs w-full"
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="px-6 py-1.5 bg-white rounded-md placeholder:text-xs w-full"
        />

        <Button type="submit" variant="primary" className="w-full">
          Login
        </Button>
      </form>
      <div className="mt-4 flex flex-col items-center justify-center gap-3">
        <span>Don't have an account yet?</span>
        <NavLink to="/auth/signup">create account</NavLink>
      </div>
    </div>
  );
}
