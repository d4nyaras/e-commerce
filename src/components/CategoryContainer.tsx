import Link from "next/link";
import { ReactNode } from "react";

interface CategoryContainerProps {
  icon: ReactNode;
  label: string;
}

export default function CategoryContainer({
  icon,
  label,
}: CategoryContainerProps) {
  return (
    <Link
      href={`/product/category/${label.toLocaleLowerCase()}`}
      className="no-underline w-[15%]"
    >
      <div className="flex flex-col gap-4 items-center justify-center border border-slate-200 rounded-2  p-6  w-[200px] h-[200px] ">
        <div className="text-[#FB2873] text-[56px] ">{icon}</div>
        <h2 className="text-xl font-medium ">{label}</h2>
      </div>
    </Link>
  );
}
