"use client";
import { useState } from "react";
import { Rating } from "@mui/material";
import SetQuality from "./SetQuantity";
import Button from "@/components/Button";

import Image from "next/image";
import { ProductInterface, ReviewInterface } from "@/types/product";
import toast from "react-hot-toast";

export default function ProductDetails({
  product,
}: {
  product: ProductInterface;
}) {
  const productRating =
    product.reviews.reduce(
      (acc: number, item: ReviewInterface) => item.rating + acc,
      0
    ) / product.reviews.length;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div
        className="
    flex
    md:flex-col
    gap-4
    justify-center
    md:justify-start
    md:w-28
    w-full
    overflow-x-auto
    md:overflow-visible
  "
      >
        {product?.images?.map((image: string, index: number) => (
          <div
            key={index}
            className={`bg-[#FFF4F8] cursor-pointer items-center justify-center border-2 ${
              selectedImage === image
                ? "border-pink-500 rounded-md"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`product-${product.id}`}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="md:w-[50%] w-full relative bg-[#FFF4F8] rounded-lg overflow-hidden h-[400px] md:h-[500px]">
        <Image
          src={selectedImage}
          alt={product.title}
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="md:w-[40%] w-full flex flex-col gap-4">
        <h1 className="font-bold text-3xl">{product.title}</h1>
        <div className="flex gap-2 items-center">
          <Rating value={productRating} readOnly />
          <span className="text-md text-gray-500">
            ({product.reviews.length} Reviews)
          </span>
        </div>
        <span className="font-medium text-3xl">${product.price}</span>
        <span>{product.description}</span>

        <hr className="w-full my-8 text-slate-400" />

        <span className="font-medium text-md">Weight: {product.weight}</span>
        <span className="font-medium text-md">Brand: {product.brand}</span>

        <div className="flex flex-col sm:flex-row gap-4">
          <SetQuality />
          <Button
            label="Buy Now"
            onClick={() => toast.success("Product added to cart!")}
          />
        </div>
      </div>
    </div>
  );
}
