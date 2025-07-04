"use client";
import Link from "next/link";
import Container from "./Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

export default function NavBar() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn + " this is logged in status");
  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-sm mb-8">
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
              <Link href="contact">Contact</Link>
              <Link href="about-us">About</Link>
              <Link href="sign-up">Sign Up</Link>
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
