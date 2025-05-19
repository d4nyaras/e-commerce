"use client";
import { FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  // register: UseFormRegister<FieldValue>,
  register: any;

  errors: FieldErrors;
}

export default function Input({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  errors,
}: InputProps) {
  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, {
          required: required ? `${label} is required` : false,
        })}
        type={type}
        placeholder=""
        className={`peer w-full p-4 pt-6 outline-none bg-white font-light border-b-2 transition ${
          errors[id] ? "border-rose-400" : "border-slate-300"
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-5 z-10 origin-[0] transform scale-100 -translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all ${
          errors[id] ? "text-rose-400" : "text-slate-400"
        }`}
      >
        {label}
      </label>
      {errors[id] && (
        <p className="text-sm text-rose-500 mt-1">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
