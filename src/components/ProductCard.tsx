"use client";

import formatPrice from "@/utils/formatPrice";
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
      className="w-[250px] cursor-pointer  rounded-sm p-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-start w-full gap-2 ">
        <Image
          src={data.images[0]}
          alt={data.title}
          width={250}
          height={250}
          unoptimized
          className="bg-[#F5F5F5]"
        />
        <div className="text-bold font-bold">{data.title}</div>
        <div className="font-semibold text-[#DB4444] ">
          {formatPrice(data.price)}
        </div>
        <div className="flex gap-2 items-center">
          <Rating value={productRating} readOnly />
          <span className="font-bold text-gray-500">
            ({data.reviews.length})
          </span>
        </div>
      </div>
    </div>
  );
}
