"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import ScrollButtons from "@/components/ScrollButtons";
import API from "@/services/api";
import { categoryIcons } from "@/utils/categoryIcons";
import CategoryContainer from "@/components/CategoryContainer";
import Image from "next/image";
import servicesFirst from "../../public/ServicesFirst.svg";
import servicesSecond from "../../public/ServicesSecond.svg";
import servicesThird from "../../public/ServicesThird.svg";
import SecondHomeBanner from "@/components/SecondHomeBanner";
import { ProductInterface } from "@/types/product";

export default function Home() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [category, setCategory] = useState<string[]>([]);

  useEffect(() => {
    API.get("/products/category-list")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  }, []);

  useEffect(() => {
    API.get("/products?limit=35")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  }, []);

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
        <div>
          <HomeBanner />
        </div>
        <div>
          <SectionHeading header="Flash Sales" title="Today's" />
          <ScrollButtons>
            {products.slice(0, 10).map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </ScrollButtons>
        </div>

        <hr className="w-[100%] my-8 text-slate-300  " />

        <div>
          <SectionHeading header="Browse By Category" title="Categories" />
          <ScrollButtons isFlex={true}>
            {category.map((category) => {
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
        </div>

        <hr className="w-[100%] my-8 text-slate-300  " />

        <div>
          <SectionHeading title="This Month" header="Best Selling Products" />
          <ScrollButtons isFlex={true}>
            {products.slice(10, 20).map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </ScrollButtons>
        </div>

        <div>
          <HomeBanner />
        </div>

        <div>
          <SectionHeading title="Our Products" header="Explore Our Products" />
          <ScrollButtons isFlex={false}>
            {products.slice(20, 35).map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </ScrollButtons>
        </div>

        <hr className="w-[100%] my-8 text-slate-300  " />

        <div>
          <div>
            <SectionHeading title="Featured" header="New Arrival" />
            <SecondHomeBanner />
          </div>

          <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {businessData.map((business) => (
              <div
                key={business.title}
                className="flex flex-col items-center text-center gap-2 p-4"
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
        </div>
      </Container>
    </div>
  );
}
