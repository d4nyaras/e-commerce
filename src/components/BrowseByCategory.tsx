import CategoryContainer from "./CategoryContainer";
import { FaTv } from "react-icons/fa";

export default function BrowseByCategory() {
  return (
    <>
      <CategoryContainer icon={<FaTv />} label="tv" />
    </>
  );
}
