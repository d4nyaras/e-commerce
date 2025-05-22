import {
  FaLaptop,
  FaTshirt,
  FaShoePrints,
  FaMobileAlt,
  FaMotorcycle,
  FaShoppingBag,
  FaCouch,
  FaGem,
  FaLeaf,
  FaHeart,
  FaBasketballBall,
  FaCar,
  FaTabletAlt,
  FaSun,
} from "react-icons/fa";
import { MdWatch } from "react-icons/md";

import {
  GiLipstick,
  GiPerfumeBottle,
  GiHighHeel,
  GiDress,
} from "react-icons/gi";
import { IconType } from "react-icons";

export const categoryIcons: Record<string, IconType> = {
  beauty: GiLipstick,
  fragrances: GiPerfumeBottle,
  furniture: FaCouch,
  groceries: FaShoppingBag,
  "home-decoration": FaSun,
  "kitchen-accessories": FaLeaf,
  laptops: FaLaptop,
  "mens-shirts": FaTshirt,
  "mens-shoes": FaShoePrints,
  "mens-watches": MdWatch,
  "mobile-accessories": FaMobileAlt,
  motorcycle: FaMotorcycle,
  "skin-care": FaHeart,
  smartphones: FaMobileAlt,
  "sports-accessories": FaBasketballBall,
  sunglasses: FaSun,
  tablets: FaTabletAlt,
  tops: FaTshirt,
  vehicle: FaCar,
  "womens-bags": FaShoppingBag,
  "womens-dresses": GiDress,
  "womens-jewellery": FaGem,
  "womens-shoes": GiHighHeel,
  "womens-watches": MdWatch,
};
