import NewsPage from "@/components/NewsPage";

export default function Home() {
  {/* @ts-expect-error Async Server Component */}
  return <NewsPage />;
}
