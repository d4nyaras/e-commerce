"use client";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center border border-gray-300 rounded overflow-hidden w-fit">
      <button
        onClick={decrease}
        className="h-[50px] px-4 text-pink-500 font-bold hover:bg-pink-100 border-r border-gray-300 "
      >
        <FaMinus />
      </button>

      <div className="px-6 py-2 text-lg font-semibold text-gray-800 select-none">
        {quantity}
      </div>

      <button
        onClick={increase}
        className="h-[50px] px-4 text-pink-500 font-bold hover:bg-pink-100 border-l border-gray-300 "
      >
        <FaPlus />
      </button>
    </div>
  );
}
