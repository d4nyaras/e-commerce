import Heading from "./Heading";
import moment from "moment";
import { Rating } from "@mui/material";
import { ProductInterface, ReviewInterface } from "@/types/product";

export default function ListRating({ product }: { product: ProductInterface }) {
  return (
    <div>
      <Heading title="Product Review" />

      <div className="text-sm mt-2 flex flex-col gap-6">
        {product.reviews &&
          product.reviews.map((review: ReviewInterface) => {
            return (
              <div
                key={review.reviewerName}
                className="mb-8 border-b border-[#FB2873] w-full md:w-[60%]"
              >
                <div className="flex gap-2 items-center ">
                  <div className="font-semibold">{review?.reviewerName}</div>
                  <div className="font-light">
                    {moment(review.date).fromNow()}
                  </div>
                </div>
                <div>
                  <Rating value={review.rating} readOnly />
                  <div className="mb-4">{review.comment}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
