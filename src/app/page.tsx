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

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

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
          <div className="flex justify-between px-32 py-8">
            {businessData.map((business) => {
              return (
                <div
                  className="flex flex-col items-center justify-center gap-2"
                  key={business.title}
                >
                  <Image
                    src={business.icon}
                    alt={business.title}
                    className="w-16  h-16"
                  />
                  <h1 className="font-bold text-lg">{business.title}</h1>
                  <span>{business.context}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
