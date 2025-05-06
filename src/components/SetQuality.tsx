"use client";

import { CartProductType } from "./ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyles = "border-[1.5px]  border-slate-300 px-2 rounded ";

export default function SetQuality({
  cartCounter,
  cartProduct,
  handleQtyDecrease,
  handleQtyIncrease,
}: SetQtyProps) {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUAlTY</div>}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyles} onClick={handleQtyIncrease}>
          +
        </button>
        <div>{cartProduct.quality}</div>
        <button className={btnStyles} onClick={handleQtyDecrease}>
          -
        </button>
      </div>
    </div>
  );
}
