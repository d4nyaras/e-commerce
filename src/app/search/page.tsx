import { Suspense } from "react";
import SearchPageClient from "@/components/SearchPageClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading search...</div>}>
      <SearchPageClient />
    </Suspense>
  );
}
