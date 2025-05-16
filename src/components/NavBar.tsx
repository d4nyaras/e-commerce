import Link from "next/link";
import Container from "./Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

export default function NavBar() {
  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-sm mb-16">
      <div className="py-4 border-b-[1px] border-[#fdb4cd] ">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${redressed.className}  font-bold text-2xl `}
            >
              E-Shop
            </Link>
            <div className="flex gap-5 font-medium">
              <span>Home</span>
              <span>Contact</span>
              <span>About</span>
              <span>Sign Up</span>
            </div>
            <div className="flex items-center gap-3 md:gap-12">
              <FaRegHeart size={28} />
              <CartCount />
              <FiUser size={28} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
