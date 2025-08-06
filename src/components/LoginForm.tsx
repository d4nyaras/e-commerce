"use client";

import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import API from "@/services/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Form state
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

    setIsLoading(true);
    try {
      const response = await API.post("/auth/login", {
        username,
        password,
      });

      login(response.data);
      router.push("/");
    } catch (error: unknown) {
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        (error as { response?: { data?: { message?: string } } }).response
      ) {
        console.log(
          (error as { response?: { data?: { message?: string } } }).response
            ?.data?.message
        );
      } else {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6  w-[80%] ">
      {isLoading && <div>is Loading...</div>}
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

        <div className="flex justify-between items-center mt-2">
          <Button label="Log In" />
          <Link href="/" className="text-[#FB2873] text-sm">
            Forget Password
          </Link>
        </div>
      </form>
    </div>
  );
}
