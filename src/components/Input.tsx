"use client";
import React from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function Input({
  placeholder = "",
  className = "",
  icon,
}: InputProps) {
  return (
    <div className="relative flex items-center w-full max-w-xs">
      {icon && (
        <span className="absolute right-3 text-gray-600 pointer-events-none">
          {icon}
        </span>
      )}

      <input
        placeholder={placeholder}
        className={`
          outline-none
          border
          border-transparent
          bg-gray-100
          text-sm
          text-gray-500
          focus:border-[#FB2873]
          focus:ring-0
          transition
          duration-300
          rounded-sm
          p-2
          pr-10
          w-full
          ${className}
        `}
      />
    </div>
  );
}
