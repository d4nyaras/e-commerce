import Link from "next/link";

interface AnnouncementBarProps {
  message: string;
}

export default function AnnouncementBar({ message }: AnnouncementBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center text-center px-2 sm:px-4 py-2 bg-[#FB2873] text-white gap-2 text-sm sm:text-base">
      <span className=" max-w-full flex flex-wrap">{message}</span>
      <Link href="/">
        <h3 className="font-semibold underline whitespace-nowrap ">ShopNow</h3>
      </Link>
    </div>
  );
}
