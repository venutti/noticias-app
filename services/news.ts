import axios from "axios";

import { INew } from "../interfaces/INew";

const API_URL = "https://eventregistry.org/api/v1/article/getArticles";

export const getNews = async (): Promise<INew[]> => {
  const response = await axios.get(API_URL, {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      lang: "spa",
      articlesCount: 20,
      sourceLocationUri: "https://en.wikipedia.org/wiki/Argentina",
    },
  });

  if (!response.data.articles) throw new Error("No articles found");

  return response.data.articles.results.map((article: any) => ({
    title: article.title,
    body: article.body,
    date: article.date,
    url: article.url,
    image: article.image,
  }));
};
