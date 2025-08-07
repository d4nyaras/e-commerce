"use client";
import API from "@/services/api";
import ProductCard from "@/components/ProductCard";
import { ProductInterface } from "@/types/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NoResults from "@/components/NoResults";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<{
    products: ProductInterface[];
  } | null>(null);

  useEffect(() => {
    if (categoryId) {
      API.get(`/products/category/${categoryId}`)
        .then((res) => setCategory(res.data))
        .catch((error) => console.log(error));
    }
  }, [categoryId]);

  if (!category?.products?.length) {
    return <NoResults />;
  }

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto ">
      <h1 className="text-2xl font-semibold mb-6">
        Results for: <span className="text-pink-600">{categoryId}</span>
      </h1>

      {category.products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {category?.products.map((product: ProductInterface) => (
            <div key={product.id} className="flex items-center justify-center">
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default CategoryPage;
