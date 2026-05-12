import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    signUp(name, email, password);

    // redirect to login page
    navigate("/auth/login");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-auto lg:min-h-[80vh]">
      <h2 className="text-[34px] leading-[37px] font-bold font-serif tracking-tight">
        Sign Up
      </h2>

      <form
        onSubmit={handleSignup}
        className="w-full max-w-[300px] md:max-w-[450px] flex flex-col gap-3"
      >
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="outline-none px-6 py-1.5 bg-white rounded-md placeholder:text-xs w-full"
        />

        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none px-6 py-1.5 bg-white rounded-md placeholder:text-xs w-full"
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none px-6 py-1.5 bg-white rounded-md placeholder:text-xs w-full"
        />

        <Button type="submit" variant="primary" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
