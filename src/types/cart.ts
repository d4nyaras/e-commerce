export interface ProductInCart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface SingleCart {
  id: number;
  products: ProductInCart[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface CartInterface {
  carts: SingleCart[];
  total: number;
  skip: number;
  limit: number;
}
