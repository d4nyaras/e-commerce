import Heading from "./Heading";
import moment from "moment";
import { Rating } from "@mui/material";
interface ListRatingProps {
  product: any;
}
export default function ListRating({ product }: ListRatingProps) {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div
                key={review.reviewerName}
                className="mb-8 border-b border-[#FB2873] w-[60%]"
              >
                <div className="flex gap-2 items-center ">
                  <div className="font-semibold">{review?.reviewerName}</div>
                  <div className="font-light">
                    {moment(review.data).fromNow()}
                  </div>
                </div>
                <div className="">
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
