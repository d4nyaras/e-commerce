"use client";
import React, { useState } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  variant?: "default" | "minimal";
}

export default function Input({
  placeholder = "",
  className = "",
  icon,
  value,
  onChange,
  type = "text",
  variant = "default",
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const showFloatingLabel = isFocused || !!value;

  const baseInputStyle = `w-full outline-none text-sm transition duration-300 ${className}`;
  const defaultStyle =
    "bg-gray-100 text-gray-500 border border-transparent rounded-sm p-2 pr-10 focus:border-[#FB2873]";
  const minimalStyle =
    "bg-transparent border-b border-gray-300 text-gray-700 py-2 pr-10 focus:border-pink-500";

  return (
    <div className="relative w-full max-w-xs">
      {/* Floating Label */}
      {variant === "minimal" && (
        <label
          className={`absolute left-0 text-sm text-gray-400 transition-all duration-200 pointer-events-none ${
            showFloatingLabel ? "top-[-10px] text-xs text-pink-500" : "top-2"
          }`}
        >
          {placeholder}
        </label>
      )}

      {icon && (
        <span className="absolute right-3 top-2.5 text-gray-600 pointer-events-none">
          {icon}
        </span>
      )}

      <input
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${baseInputStyle} ${
          variant === "default" ? defaultStyle : minimalStyle
        }`}
        type={type}
        placeholder={variant === "default" ? placeholder : ""}
      />
    </div>
  );
}
