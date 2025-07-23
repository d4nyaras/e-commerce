"use client";
import Link from "next/link";
import Container from "./Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FiSearch } from "react-icons/fi";

import Input from "./Input";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

export default function NavBar() {
  const { isLoggedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-sm mb-8 ">
      <div className="py-4 border-b-[1px] border-[#fdb4cd] ">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              E-Shop
            </Link>

            <div className="hidden md:flex gap-10 font-medium ">
              <Link href="/contact" className="hover-pink">
                Contact
              </Link>
              <Link href="/about-us" className="hover-pink">
                About
              </Link>
              <Link href="/register" className="hover-pink">
                Sign Up
              </Link>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="hidden md:flex gap-4 items-center">
                <form onSubmit={handleSearch}>
                  <Input
                    placeholder="What are you looking for?"
                    icon={<FiSearch />}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>

                <CartCount />
                <FiUser size={24} />
              </div>

              <button
                className="md:hidden focus:outline-none cursor-pointer "
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
          <div className="flex flex-col items-start px-6 py-5 gap-5 text-base font-medium">
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="w-full py-2 hover:text-pink-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/about-us"
              onClick={toggleMobileMenu}
              className="w-full py-2 hover:text-pink-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/sign-up"
              onClick={toggleMobileMenu}
              className="w-full py-2 hover:text-pink-600 transition-colors"
            >
              Sign Up
            </Link>
            <form onSubmit={handleSearch} className="w-full mt-4">
              <Input
                placeholder="What are you looking for?"
                icon={<FiSearch className="text-pink-500" />}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded border border-pink-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </form>
            <div
              className="flex gap-6 pt-3 justify-start "
              onClick={toggleMobileMenu}
            >
              <CartCount />
              <FiUser size={22} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
