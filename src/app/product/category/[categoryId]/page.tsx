import API from "@/services/api"; // Adjust the import path to where your API instance is
import Image from "next/image";
import { notFound } from "next/navigation";

interface Params {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Params) {
  const { category } = params;

  try {
    const res = await API.get(`/products/category/${category}`);
    const data = res.data;

    console.log(data);

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">{category}</h1>
        <div className="grid grid-cols-4 gap-4">
          {data.products.map((product: any) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="mt-2 text-lg font-medium">{product.title}</h2>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    // If API returns 404 or error occurs, show 404 page
    return notFound();
  }
}
