"use client";
import { FieldErrors, FieldValue, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  //   register: UseFormRegister<FieldValue>,
  register: any;

  errors: FieldErrors;
}

export default function Input({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
}: InputProps) {
  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id="id"
        disabled={disabled}
        {...register(id, { required })}
        type={type}
        placeholder=""
        className={`peer w-full p-4 pt-6 outline-none bg-white font-light  border-b-2 transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id]
            ? "border-rose-400 focus:border-rose-400"
            : "border-slate-300 focus:border-slate-300"
        } `}
      />
      <label
        className={` ${
          errors[id] ? "text-rose-400" : "text-slate-300"
        } absolute cursor-text text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
