"use client";

import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import Link from "next/link";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full relative flex flex-col gap-2"
      >
        <Heading title="Login in" />
        <Button outline label="Continue with google " onClick={() => {}} />
        <hr className="bg-slate-300 w-full h-px" />

        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          type="password"
        />
        <Button
          label={isLoading ? "Loading" : "Login"}
          type="submit"
          onClick={() => {}}
        />
      </form>

      <p className="text-sm">
        Do not have an account?
        <Link href="/register" className="underline">
          Sign up{" "}
        </Link>
      </p>
    </div>
  );
}
