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
    <div className="flex flex-col gap-6">
      <div>
        <Heading title="Log in" />
        <span>Enter your details below</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col gap-2 "
      >
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
      <div className="flex justify-between ">
        <div>
          <Button
            label={isLoading ? "Loading" : "Lon In"}
            type="submit"
            onClick={() => {}}
          />
        </div>
        <div className="text-[#FB2873]">
          <Link href="/" className="">
            Forget Password
          </Link>
        </div>
      </div>
    </div>
  );
}
