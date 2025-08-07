"use client";

import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button";
import API from "@/services/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await API.post("/auth/login", {
        username,
        password,
      });

      login(response.data);
      toast.success("Welcome back!");
      router.push("/");
    } catch (error: unknown) {
      const message =
        (error as { response?: { data?: { message?: string } } }).response?.data
          ?.message || "Login failed. Please try again.";
      toast.error(message);
    } finally {
    }
  };

  return (
    <div className="flex flex-col gap-6  w-[80%] ">
      <div>
        <Heading title="Log in" />
        <span>Enter your details below</span>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div>
          <Input
            placeholder="Username"
            variant="minimal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">{errors.username}</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Password"
            variant="minimal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        <div className=" bg-blue-50 text-blue-800 p-3 rounded text-sm border border-blue-200">
          <p className="font-medium">Use the demo credentials:</p>
          <p>
            <strong>Username:</strong> <code>arianaw</code> <br />
            <strong>Password:</strong> <code>arianawpass</code>
          </p>
        </div>

        <button
          type="button"
          className="text-sm text-blue-600 underline"
          onClick={() => {
            setUsername("arianaw");
            setPassword("arianawpass");
            toast.success("Demo credentials filled in!");
          }}
        >
          Use Demo Account
        </button>

        <div className="flex justify-between items-center mt-2">
          <Button label="Log In" />
          {/* <Link href="/" className="text-[#FB2873] text-sm">
            Forget Password
          </Link> */}
        </div>
      </form>
    </div>
  );
}
