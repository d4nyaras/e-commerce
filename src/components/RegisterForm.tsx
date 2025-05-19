"use client";

import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import Link from "next/link";

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
    <div className="flex flex-col gap-6">
      <div>
        <Heading title="Create an account" />
        <span>Enter your details below</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col gap-2 "
      >
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
      </form>

      <Button
        label={isLoading ? "Loading" : "Create Account"}
        type="submit"
        onClick={() => {}}
      />
      <div className="flex justify-center ">
        <p className="">
          Already have and account?
          <Link href="/login" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
