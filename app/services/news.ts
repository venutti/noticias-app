import axios from "axios";

import { INew } from "../interfaces/INew";

const API_URL = "https://eventregistry.org/api/v1/article/getArticles";

export const getNews = async (): Promise<INew[]> => {
  const response = await axios.get(API_URL, {
    params: {
      apiKey: "359d01b5-8cd8-4d10-9dd5-a147bc330756",
      lang: "spa",
      articlesCount: 20,
      sourceLocationUri: "https://en.wikipedia.org/wiki/Argentina",
    },
  });

  return response.data.articles.results.map((article: any) => ({
    title: article.title,
    body: article.body,
    date: article.date,
    url: article.url,
    image: article.image,
  }));
};
