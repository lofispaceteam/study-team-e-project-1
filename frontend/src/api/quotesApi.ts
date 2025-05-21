// Mock urls:
// https://run.mocky.io/v3/47cacd0c-777b-4dbc-8626-a63f29f2b25d

import { apiClient } from "./apiClient";
import { type Quote } from "../types/Quote";

export const getQuotes = async (): Promise<Quote[]> => {
  const response = await apiClient.get("/quotes");
  return response.data;
};

export const getQuoteById = async (id: number): Promise<Quote> => {
  //   const response = await apiClient.get(`/quotes/${id}`);
  const response = await apiClient.get(
    `/v3/47cacd0c-777b-4dbc-8626-a63f29f2b25d`
  );
  console.log(response.data);
  return response.data;
};

export const createQuote = async (quote: Omit<Quote, "id">): Promise<Quote> => {
  const response = await apiClient.post("/quotes", quote);
  return response.data;
};
