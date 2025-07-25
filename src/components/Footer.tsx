import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import Container from "./Container";
import FooterList from "./FooterList";
import Link from "next/link";
export default function Footer() {
  return (
    <footer
      className="bg-[#FB2873] text-slate-200 text-sm mt-1  "
      style={{ border: "3px solid red" }}
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between p-12">
          <FooterList>
            <h3 className="text-base font-bold mb-8">Account</h3>
            <Link href="#">My Account</Link>
            <Link href="#">Login / Register</Link>
            <Link href="#">Cart</Link>
            <Link href="#">Wishlist</Link>
            <Link href="#">Shop</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-8">Quick Link</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Of Use</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Contact</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="text-base font-bold mb-8">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quo alias sunt qui laboriosam dicta similique, sequi dolores nemo
              iure vitae in fugit iusto atque, molestiae blanditiis quaerat ipsa
              ex.
            </p>
            <p>&copy;{new Date().getFullYear()} E-Shop All right reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <FaXTwitter size={24} />
              </Link>
              <Link href="#">
                <SiInstagram size={24} />
              </Link>
              <Link href="#">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}
