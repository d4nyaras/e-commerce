// "use client";
// import { useCart } from "@/hooks/useCart";
// import { useRouter } from "next/navigation";
// import { PiShoppingCartLight } from "react-icons/pi";

// export default function CartCount() {
//   const router = useRouter();
//   const { cartTotalQty } = useCart();
//   return (
//     <div
//       className="relative cursor-pointer"
//       onClick={() => router.push("/cart")}
//     >
//       <div className="text-[#FB2873]">
//         <PiShoppingCartLight size={28} />
//       </div>
//       <span className="absolute top-[-10px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm">
//         {cartTotalQty}
//       </span>
//     </div>
//   );
// }

import React from "react";

function CartCount() {
  return <div>CartCount</div>;
}

export default CartCount;
