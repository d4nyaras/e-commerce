"use client";

import formatPrice from "@/utils/formatPrice";
import truncateText from "@/utils/truncateText";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
interface ProductCardProps {
  data: any;
}

export default function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1 ">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.images[0].image}
            alt={data.name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length}</div>
        <div className="font-semibold ">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
}
