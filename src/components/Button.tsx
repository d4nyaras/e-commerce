"use client";

interface ButtonInterface {
  label: string;
  disable?: boolean;
  custom?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  inPink?: boolean;
}

export default function Button({
  label,
  disable,
  custom,
  onClick,
  inPink,
}: ButtonInterface) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#DB4444] text-white py-4 px-16 h-fit whitespace-nowrap rounded flex items-center justify-center hover:opacity-70 transition cursor-pointer ${
        custom ? custom : ""
      } ${inPink && "bg-[#FB2873]"}`}
      disabled={disable}
    >
      {label}
    </button>
  );
}
