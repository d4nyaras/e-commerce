"use client";
import { useState } from "react";
import { Rating } from "@mui/material";
import SetQuality from "./SetQuantity";
import Button from "@/components/Button";

import Image from "next/image";

export default function ProductDetails({ product }: any) {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex gap-8">
      <div className="flex-1 flex gap-4">
        <div className="w-[20%] flex flex-col gap-4 items-center">
          {product?.images?.map((image: string, index: number) => (
            <div
              key={index}
              className={`bg-[#FFF4F8] cursor-pointer border-2 ${
                selectedImage === image
                  ? "border-pink-500 rounded-md"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`product-${product.id}`}
                width={140}
                height={140}
              />
            </div>
          ))}
        </div>

        <div className="w-[80%] relative bg-[#FFF4F8] h-[500px] rounded-lg overflow-hidden">
          <Image
            src={selectedImage}
            alt={product.id}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-[40%] flex flex-col gap-4">
        <h1 className="font-bold text-3xl">{product.title}</h1>
        <div className="flex gap-2 items-center">
          <Rating value={productRating} readOnly />
          <span className="text-md text-gray-500">
            ({product.reviews.length} Reviews)
          </span>
        </div>
        <span className="font-medium text-3xl">${product.price}</span>
        <span>{product.description}</span>

        <hr className="w-[100%] my-8 text-slate-400" />

        <span className="font-medium text-md">Weight: {product.weight}</span>
        <span className="font-medium text-md">Brand: {product.brand}</span>

        <div className="flex gap-4">
          <SetQuality />

          <div>
            <Button label="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
