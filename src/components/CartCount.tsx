"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { PiShoppingCartLight } from "react-icons/pi";

export default function CartCount() {
  const router = useRouter();
  const { cart } = useCart();

  // Defensive check in case cart or carts is undefined
  const totalQuantity = cart?.carts
    ? cart.carts.reduce((acc, cart) => acc + cart.totalQuantity, 0)
    : 0;

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-[#FB2873]">
        <PiShoppingCartLight size={28} />
      </div>
      {totalQuantity > 0 && (
        <span className="absolute top-[-10px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm">
          {totalQuantity}
        </span>
      )}
    </div>
  );
}
