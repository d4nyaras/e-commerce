import API from "@/services/api";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q;

  if (!query) return notFound();

  let data;
  try {
    const res = await API.get(
      `/products/search?q=${encodeURIComponent(query)}`
    );
    data = res.data;
  } catch (error) {
    console.error("Search failed:", error);
    return <div className="p-8">Error fetching products.</div>;
  }

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Results for: <span className="text-pink-600">{query}</span>
      </h1>

      {data.products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.map((product: any) => (
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
