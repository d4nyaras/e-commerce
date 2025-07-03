"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disable?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  disable,
  outline,
  small,
  custom,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disable}
      className={`disabled: opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition  w-full  flex items-center justify-center gap-2 ${
        outline ? "bg-white" : "bg-[#FB2873]"
      } ${outline ? "text-[#eb286c]" : "text-white"} ${
        small ? "text-sm font-light" : "text-md font-semibold"
      }  ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"} ${
        custom ? custom : ""
      }`}
    >
      {label}
    </button>
  );
}
