import Container from "@/components/Container";
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
      </Container>
    </div>
  );
}
