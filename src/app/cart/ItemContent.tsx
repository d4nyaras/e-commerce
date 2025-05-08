"use client";
import { CartProductType } from "@/components/ProductDetails";
import SetQuality from "@/components/SetQuality";
import { useCart } from "@/hooks/useCart";
import formatPrice from "@/utils/formatPrice";
import truncateText from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";

interface ItemContentProps {
  item: CartProductType;
}

export default function ItemContent({ item }: ItemContentProps) {
  const {
    handleRemoveProductToCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
  } = useCart();
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center  ">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className="w-[70px] ">
            <button
              className="text-slate-500 underline"
              onClick={() => {
                handleRemoveProductToCart(item);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuality
          cartCounter={true}
          cartProduct={item}
          handleQtyDecrease={() => {
            handleCartQtyDecrease(item);
          }}
          handleQtyIncrease={() => {
            handleCartQtyIncrease(item);
          }}
        />
      </div>
      <div className="justify-self-end  font-semibold">
        {item.price * item.quality}
      </div>
    </div>
  );
}
