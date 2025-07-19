"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import ItemContent from "./ItemContent";
import formatPrice from "@/utils/formatPrice";
import Input from "@/components/Input";
import Button from "@/components/Button";
export default function CartClient() {
  const { cart } = useCart();

  const allProducts = cart.carts?.flatMap(
    (item: { products: any[] }) => item.products
  );

  const totalPrice = cart.carts?.reduce((sum, item) => sum + item.total, 0);
  const totalProducts = cart.carts?.reduce(
    (sum, item) => sum + item.totalProducts,
    0
  );

  if (!allProducts || allProducts.length === 0) {
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
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-5  gap-4 p-6  shadow-sm items-center font-medium text-base ">
        <div className="col-span-2 justify-self-start">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-end">Subtotal</div>
      </div>
      <div className="flex flex-col gap-8">
        {allProducts &&
          allProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>

      <div className="flex justify-between mt-8">
        <div className="flex gap-4 h-fit">
          <div style={{ border: "3px solid blue" }}>input coupon code</div>
          <Button label="Apply Coupon" />
        </div>
        <div className="w-[40%] border-2 font-medium text-base   rounded-md border-gray-800 p-8  ">
          <h1 className="font-semibold text-lg">Cart Total</h1>
          <div className="flex justify-between py-4">
            <span>Subtotal:</span>
            <span>${totalPrice}</span>
          </div>
          <hr className="w-[100%]  text-slate-400  " />
          <div className="flex justify-between py-4">
            <span>TotalProducts:</span>
            <span>{totalProducts}</span>
          </div>
          <hr className="w-[100%]  text-slate-400  " />

          <div className="flex justify-between py-4">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex items-center justify-center">
            <Button label="Process to checkout" />
          </div>
        </div>
      </div>
    </div>
  );
}
