"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ProductInterface } from "@/types/product";
import API from "@/services/api";

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim();
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setError("Missing search query");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await API.get(
          `/products/search?q=${encodeURIComponent(query)}`
        );
        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8">{error}</div>;

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Results for: <span className="text-pink-600">{query}</span>
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center items-center">
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
