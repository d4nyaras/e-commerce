import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-[500px] justify-center gap-7 ">
      <h1 className="text-7xl font-black text-black">404 Not Found</h1>
      <p className="text-black">
        Your visited page not found. You may go home page.
      </p>
      <Link
        href="/"
        className=" rounded-sm py-4 px-8 bg-[#DB4444] text-white hover:px-12 transition-all"
      >
        Back to home page
      </Link>
    </div>
  );
}
