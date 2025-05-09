"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import ItemContent from "./ItemContent";
import formatPrice from "@/utils/formatPrice";
export default function CartClient() {
  const { handleClearCart, cartTotalAmount, cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div>
        <div>your cart is empty</div>
        <div>
          <Link href={"/"}>
            <span>Start shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 mt-8 text-xs gap-4 pb-2 items-center">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 justify-between gap-4">
        <div className="w-[90px]">
          <Button
            label="Clear Cart"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
      </div>
      <div className="text-sm flex flex-col gap-1 items-start">
        <div className="flex justify-between text-base font-semibold w-full">
          <span>Subtotal</span>
          <span>{formatPrice(cartTotalAmount)}</span>
        </div>
        <p className="text-slate-500">
          Taxes and shipping calculate at checkout
        </p>
        <Button label="Checkout" onClick={() => {}} />
        <Link href={"/"}>
          <span>Continue shopping</span>
        </Link>
      </div>
    </div>
  );
}
