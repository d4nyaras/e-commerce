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
      className="w-[1000px]"
      // className="w-[300px] cursor-pointer border-[1.2px] border-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
      style={{ border: "3px solid purple" }}
    >
      <div
        className="flex flex-col items-center w-full gap-1 "
        style={{ border: "3px solid blue" }}
      >
        <div className="" style={{ border: "3px solid red" }}>
          <Image
            src={data.images[0]}
            alt={data.title}
            width={1000}
            height={1000}
            // className="w-full h-full object-contain"
            unoptimized
          />
        </div>
        <div>{data.title}</div>
        {/* <div className="mt-4">{truncateText(data.name)}</div> */}
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length}</div>
        <div className="font-semibold ">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
}
