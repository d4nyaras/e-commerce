import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import { products } from "@/utils/products";
import ProductCard from "@/components/ProductCard";
import BrowseByCategory from "@/components/BrowseByCategory";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap:8">
          {products.map((product) => {
            return <ProductCard key={product.id} data={product} />;
          })}

          {products.map((product) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
        <hr className="w-full my-8 text-slate-200  " />
        <BrowseByCategory />
      </Container>
    </div>
  );
}
