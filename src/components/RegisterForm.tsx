"use client";

import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
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
        <Heading title="Register" />
        <Button outline label="Sign up with google " onClick={() => {}} />
        <hr className="bg-slate-300 w-full h-px" />
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
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
          label={isLoading ? "Loading" : "Sign Up"}
          type="submit"
          onClick={() => {}}
        />
      </form>

      <p className="text-sm">
        Already have and account?
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
