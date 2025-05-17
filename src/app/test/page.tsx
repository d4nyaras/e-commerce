"use client";
import React, { useEffect, useState } from "react";
import API from "@/services/api";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  rating: number;
  images: string[];
  category: string;
  reviews: { username: string; comment: string; stars: number }[];
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/products/1")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <Image
            height={124}
            width={124}
            src={product.images[0]}
            alt={product.title}
            className="h-48 w-full object-contain"
          />
          <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-yellow-500"> {product.rating}/5</p>

          <div className="mt-2">
            <p className="font-semibold">Reviews:</p>
            {product.reviews.map((rev, idx) => (
              <div key={idx} className="text-sm">
                <strong>{rev.username}:</strong> {rev.comment} ({rev.stars}⭐)
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ProductList;
