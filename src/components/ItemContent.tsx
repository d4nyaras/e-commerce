"use client";
import formatPrice from "@/utils/formatPrice";
import truncateText from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import { ProductInCart } from "@/types/cart";
import toast from "react-hot-toast";

export default function ItemContent({ item }: { item: ProductInCart }) {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 p-6  shadow-sm items-center  ">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.title)}</Link>
          <div className="w-[70px] ">
            <button
              className="text-slate-500 underline"
              onClick={() => toast.success("Product removed from cart.")}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">{item.quantity}</div>
      <div className="justify-self-end  ">${item.total} </div>
    </div>
  );
}
