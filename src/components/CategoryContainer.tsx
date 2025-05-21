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
    <div className="flex flex-col gap-4 items-center justify-center border border-slate-200 rounded-2 w-[15%] p-6  ">
      <div className="text-[#FB2873] text-[56px] ">{icon}</div>
      <h2 className="text-xl font-medium ">{label}</h2>
    </div>
  );
}
