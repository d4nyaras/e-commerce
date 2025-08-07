import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onClick?: () => void;
}

export default function EmptyState({
  title = "No Products Found",
  subtitle = "We couldn't find any items matching your search.",
  buttonLabel = "Continue Shopping",
  onClick,
}: EmptyStateProps) {
  const router = useRouter();
  const handleClick = onClick ?? (() => router.push("/"));

  return (
    <div className="flex flex-col items-center justify-center h-96 text-center px-4">
      <div className="bg-red-100 p-4 rounded-full mb-4">
        <FaSearch className="w-8 h-8" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-500 mb-6">{subtitle}</p>

      <Button label={buttonLabel} onClick={handleClick} />
    </div>
  );
}
