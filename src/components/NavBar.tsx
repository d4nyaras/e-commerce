"use client";
import Link from "next/link";
import Container from "./Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

export default function NavBar() {
  const { isLoggedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-sm mb-8">
      <div className="py-4 border-b-[1px] border-[#fdb4cd]">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              E-Shop
            </Link>

            <div className="hidden md:flex gap-5 font-medium">
              <Link href="/contact" className="hover-pink">
                Contact
              </Link>
              <Link href="/about-us" className="hover-pink">
                About
              </Link>
              <Link href="/sign-up" className="hover-pink">
                Sign Up
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-4 items-center">
                <FaRegHeart size={24} />
                <CartCount />
                <FiUser size={24} />
              </div>

              <button
                className="md:hidden focus:outline-none"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-pink-300 shadow-md">
          <div className="flex flex-col items-start px-6 py-4 gap-4 text-lg font-medium">
            <Link href="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
            <Link href="/about-us" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link href="/sign-up" onClick={toggleMobileMenu}>
              Sign Up
            </Link>
            <div className="flex gap-4 pt-2">
              <FaRegHeart size={24} />
              <CartCount />
              <FiUser size={24} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
