import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import ScrollButtons from "@/components/ScrollButtons";
import CategoryContainer from "@/components/CategoryContainer";
import Image from "next/image";
import servicesFirst from "../../../public/ServicesFirst.svg";
import servicesSecond from "../../../public/ServicesSecond.svg";
import servicesThird from "../../../public/ServicesThird.svg";
import SecondHomeBanner from "@/components/SecondHomeBanner";
import { categoryIcons } from "@/utils/categoryIcons";
import { ProductInterface } from "@/types/product";

export default async function Home() {
  const [categoryRes, productsRes] = await Promise.all([
    fetch("https://dummyjson.com/products/category-list", {
      next: { revalidate: 900 },
    }),
    fetch("https://dummyjson.com/products?limit=35", {
      next: { revalidate: 900 },
    }),
  ]);

  const categories = (await categoryRes.json()) as string[];
  const productsData = (await productsRes.json()) as {
    products: ProductInterface[];
  };

  const businessData = [
    {
      icon: servicesFirst,
      title: "FREE AND FAST DELIVERY",
      context: "Free delivery for all orders over $140",
    },
    {
      icon: servicesSecond,
      title: "24/7 CUSTOMER SERVICE",
      context: "Friendly 24/7 customer support",
    },
    {
      icon: servicesThird,
      title: "MONEY BACK GUARANTEE",
      context: "We return money within 30 days",
    },
  ];

  return (
    <div className="p-8">
      <Container>
        <HomeBanner />

        <SectionHeading header="Flash Sales" title="Today's" />
        <ScrollButtons>
          {productsData.products.slice(0, 10).map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ScrollButtons>

        <hr className="w-full my-8 text-slate-300" />

        <SectionHeading header="Browse By Category" title="Categories" />
        <ScrollButtons isFlex>
          {categories.map((category) => {
            const IconComponent = categoryIcons[category];
            return (
              <CategoryContainer
                key={category}
                icon={<IconComponent />}
                label={category}
              />
            );
          })}
        </ScrollButtons>

        <hr className="w-full my-8 text-slate-300" />

        <SectionHeading title="This Month" header="Best Selling Products" />
        <ScrollButtons isFlex>
          {productsData.products.slice(10, 20).map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ScrollButtons>

        <HomeBanner />

        <SectionHeading title="Our Products" header="Explore Our Products" />
        <ScrollButtons>
          {productsData.products.slice(20, 35).map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ScrollButtons>

        <hr className="w-full my-8 text-slate-300" />

        <SectionHeading title="Featured" header="New Arrival" />
        <SecondHomeBanner />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center text-center mt-8">
          {businessData.map((business) => (
            <div
              key={business.title}
              className="flex flex-col items-center gap-2 p-4"
            >
              <Image
                src={business.icon}
                alt={business.title}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
              <h1 className="font-bold text-base sm:text-lg">
                {business.title}
              </h1>
              <span className="text-sm sm:text-base">{business.context}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
