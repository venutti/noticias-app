"use client";
import React from "react";
import ActualNews from "./ActualNews";
import MainNew from "./MainNew";
import ListNews from "./ListNews";

import { getNews } from "@/services/news";

export default async function NewsPage() {
  const news = await getNews();

  const mainNew = news[0];
  const actualNews = news.slice(1, 4);
  const otherNews = news.slice(4);

  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-6 px-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="flex-[2]">
          <MainNew mainNew={mainNew} />
        </section>
        <section className="flex-1">
          <ActualNews news={actualNews} />
        </section>
      </div>
      <section>
        <ListNews news={otherNews} />
      </section>
    </main>
  );
}
