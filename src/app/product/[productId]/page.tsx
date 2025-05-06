import Container from "@/components/Container";
import ListRating from "@/components/ListRating";
import ProductDetails from "@/components/ProductDetails";
import { product } from "@/utils/product";

interface IParams {
  productId: string;
}

export default async function Product({
  params,
}: {
  params: Promise<IParams>;
}) {
  const { productId } = await params;

  return (
    <div>
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
}
