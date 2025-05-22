"use client";
import { useEffect, useState } from "react";
import CategoryContainer from "./CategoryContainer";
import { categoryIcons } from "@/utils/categoryIcons";
import API from "@/services/api";

export default function BrowseByCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    API.get("/products/category-list")
      .then((res) => {
        setCategory(res.data);
        console.log(category);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 h-[380px] overflow-y-scroll ">
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
    </div>
  );
}
