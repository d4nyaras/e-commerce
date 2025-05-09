"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

export default function CartCount() {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
        <FiShoppingCart />
      </div>
      <span className="absolute top-[-10px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm">
        {cartTotalQty}
      </span>
    </div>
  );
}
