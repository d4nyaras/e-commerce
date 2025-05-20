"use client";

import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import Link from "next/link";
import API from "@/services/api";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await API.post("/auth/login", {
        password: data.password,
        username: data.username,
      });

      localStorage.setItem("commerce-user", response.data);
      router.push("/");
    } catch (error: any) {
      console.log(error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Heading title="Log in" />
        <span>Enter your details below</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col gap-2"
      >
        <Input
          id="username"
          label="username"
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

        <div className="flex justify-between">
          <div>
            <Button label={isLoading ? "Loading" : "Log In"} type="submit" />
          </div>
          <div className="text-[#FB2873]">
            <Link href="/" className="">
              Forget Password
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
