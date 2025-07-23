import API from "@/services/api";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const category = params.categoryId;

  let data;
  try {
    const res = await API.get(`/products/category/${category}`);
    data = res.data;
  } catch (err) {
    console.error("Error fetching category:", err);
    return notFound();
  }

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto ">
      <h1 className="text-2xl font-semibold mb-6">
        Results for: <span className="text-pink-600">{category}</span>
      </h1>

      {data.products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {data.products.map((product: any) => (
            <div key={product.id} className="flex items-center justify-center">
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
