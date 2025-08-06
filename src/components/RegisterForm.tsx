"use client";

import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Replace this with actual API call
      console.log({ name, email, password });
    } catch (err) {
      console.log("Register error", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6  w-[80%] ">
      {isLoading && <div>is loading...</div>}
      <div>
        <Heading title="Create an account" />
        <span>Enter your details below</span>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div>
          <Input
            placeholder="Name"
            variant="minimal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Email"
            variant="minimal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
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

        <Button label="Create Account" onClick={() => router.push("/login")} />
      </form>

      <div className="flex justify-center">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="underline text-[#FB2873] ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
