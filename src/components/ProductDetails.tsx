"use client";
import { useCallback, useEffect, useState } from "react";
import { Rating } from "@mui/material";
import SetColor from "./SetColor";
import SetQuality from "./SetQuantity";
import Button from "@/components/Button";
import ProductImage from "./ProductImage";
import { useCart } from "@/hooks/useCart";

import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

import Image from "next/image";
import SetQuantity from "./SetQuantity";

// interface ProductDetailsProps {
//   product: any;
// }

// export type CartProductType = {
//   id: string;
//   name: string;
//   description: string;
//   category: string;
//   brand: string;
//   selectedImg: SelectedImgType;
//   quality: number;
//   price: number;
// };

// export type SelectedImgType = {
//   color: string;
//   colorCode: string;
//   image: string;
// };

// const Horizontal = () => {
//   return <hr className="w-[30%] my-2" />;
// };

// export default function ProductDetails({ product }: ProductDetailsProps) {
//   const router = useRouter();
//   const { cartProducts, handleAddProductToCart } = useCart();
//   const [isProductInCart, setIsProductInCart] = useState(false);
//   const [cartProduct, setCartProduct] = useState<CartProductType>({
//     id: product.id,
//     name: product.name,
//     description: product.description,
//     category: product.category,
//     brand: product.brand,
//     selectedImg: { ...product.images[0] },
//     quality: 1,
//     price: product.price,
//   });

//   useEffect(() => {
//     setIsProductInCart(false);
//     if (cartProducts) {
//       const existingIndex = cartProducts.findIndex(
//         (item) => item.id === product.id
//       );
//       if (existingIndex > -1) {
//         setIsProductInCart(true);
//       }
//     }
//   }, [cartProducts]);

//   const productRating =
//     product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
//     product.reviews.length;

//   const handleColorSelect = useCallback(
//     (value: SelectedImgType) => {
//       setCartProduct((prev) => {
//         return { ...prev, selectedImg: value };
//       });
//     },
//     [cartProduct.selectedImg]
//   );

//   const handleQtyIncrease = useCallback(() => {
//     setCartProduct((prev) => {
//       return { ...prev, quality: ++prev.quality };
//     });
//   }, [cartProduct]);

//   const handleQtyDecrease = useCallback(() => {
//     if (cartProduct.quality === 1) {
//       return;
//     }
//     setCartProduct((prev) => {
//       return { ...prev, quality: --prev.quality };
//     });
//   }, [cartProduct]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//       <ProductImage
//         cartProduct={cartProduct}
//         product={product}
//         handleColorSelect={handleColorSelect}
//       />
//       <div
//         className="flex flex-col gap-1 text-slate-500 text-sm"
//         style={{ border: "3px solid red" }}
//       >
//         <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
//         <div className="flex items-center gap-2">
//           <Rating value={productRating} readOnly />
//           <div>{product.reviews.length} reviews</div>
//         </div>
//         <Horizontal />
//         <div className="text-justify">{product.description}</div>
//         <Horizontal />
//         <div>
//           <span className="font-semibold">CATEGORY:</span> {product.category}
//         </div>
//         <div>
//           <span className="font-semibold">BRAND:</span> {product.brand}
//         </div>
//         <div className={product.inStock ? "text-teal-400 " : "text-rose-400"}>
//           {product.inStock ? "In stock" : "Out of stock"}
//         </div>
//         <Horizontal />
//         {isProductInCart ? (
//           <>
//             <p className="mb-2 text-slate-500 flex items-center gap-1">
//               <FaCheckCircle className="text-teal-400" size={20} />

//               <span>Product added to cart</span>
//             </p>
//             <div className="max-[300px]">
//               <Button
//                 label="View Cart"
//                 outline
//                 onClick={() => {
//                   router.push("/cart");
//                 }}
//               />
//             </div>
//           </>
//         ) : (
//           <>
//             <SetColor
//               cartProduct={cartProduct}
//               images={product.images}
//               handleColorSelect={handleColorSelect}
//             />
//             <Horizontal />
//             <SetQuality
//               cartProduct={cartProduct}
//               handleQtyIncrease={handleQtyIncrease}
//               handleQtyDecrease={handleQtyDecrease}
//             />
//             <Horizontal />
//             <div className="max-[300px]">
//               <Button
//                 label="Add To Cart"
//                 onClick={() => handleAddProductToCart(cartProduct)}
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

export default function ProductDetails({ product }: any) {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex gap-8">
      <div className="flex-1 flex gap-4">
        <div className="w-[20%] flex flex-col gap-4 items-center">
          {product?.images?.map((image: string, index: number) => (
            <div
              key={index}
              className={`bg-[#FFF4F8] cursor-pointer border-2 ${
                selectedImage === image
                  ? "border-pink-500"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`product-${product.id}`}
                width={140}
                height={140}
              />
            </div>
          ))}
        </div>

        <div className="w-[80%] relative bg-[#FFF4F8] h-[500px] rounded-lg overflow-hidden">
          <Image
            src={selectedImage}
            alt={product.id}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-[40%] flex flex-col gap-4">
        <h1 className="font-bold text-3xl">{product.title}</h1>
        <div className="flex gap-2 items-center">
          <Rating value={productRating} readOnly />
          <span className="text-md text-gray-500">
            ({product.reviews.length} Reviews)
          </span>
        </div>
        <span className="font-medium text-3xl">${product.price}</span>
        <span>{product.description}</span>

        <hr className="w-[100%] my-8 text-slate-400" />

        <span className="font-medium text-md">Weight: {product.weight}</span>
        <span className="font-medium text-md">Brand: {product.brand}</span>

        <div className="flex gap-4">
          <SetQuality />

          <div>
            <Button label="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
