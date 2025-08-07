import Container from "@/components/Container";
import CartClient from "../../../components/CartClient";

export const metadata = {
  title: "Your Shopping Cart",
  description: "...",
};

export default function Cart() {
  return (
    <div className="pt-8">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
}
