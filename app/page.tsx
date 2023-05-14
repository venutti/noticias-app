import NewsPage from "@/components/NewsPage";
export const dynamic = "force-dynamic";

export default function Home() {
  {/* @ts-expect-error Async Server Component */}
  return <NewsPage />;
}
