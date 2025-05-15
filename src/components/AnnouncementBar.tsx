import Link from "next/link";

interface AnnouncementBarProps {
  message: string;
}

export default function AnnouncementBar({ message }: AnnouncementBarProps) {
  return (
    <div className="flex items-center justify-center py-3 bg-[#FB2873] text-white gap-2">
      <span>{message}</span>
      <Link href="/">
        <h3 className="font-semibold underline">ShopNow</h3>
      </Link>
    </div>
  );
}
