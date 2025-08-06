"use client";

import Container from "@/components/Container";
import ListRating from "@/components/ListRating";
import ProductDetails from "@/components/ProductDetails";
import API from "@/services/api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      API.get(`/products/${productId}`)
        .then((res) => setProduct(res.data))
        .catch((error) => console.log(error));
    }
  }, [productId]);

  return (
    <div>
      <Container>
        {product ? (
          <>
            <ProductDetails product={product} />
            <div className="flex flex-col mt-20 gap-4">
              <ListRating product={product} />
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </div>
  );
};

export default Product;
