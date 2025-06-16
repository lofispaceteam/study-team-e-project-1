import { apiClient } from "./apiClient";
import { type Quote } from "../types/Quote";

export const getQuotes = async (): Promise<Quote[]> => {
  const response = await apiClient.get("/quotes");
  return response.data;
};

export const getQuoteById = async (id: number): Promise<Quote> => {
  const response = await apiClient.get(`/quotes/${id}`);
  return response.data;
};

export const getRandomQuote = async (): Promise<Quote> => {
  const response = await apiClient.get("/quotes/random");
  return response.data;
};

export const createQuote = async (quote: Omit<Quote, "id">): Promise<Quote> => {
  const response = await apiClient.post("/quotes", quote);
  return response.data;
};

export const updateQuote = async (
  id: number,
  quote: Omit<Quote, "update_time">
): Promise<Quote> => {
  const response = await apiClient.put(`/quotes/${id}`, quote);
  return response.data;
};

export const deleteQuote = async (id: number): Promise<void> => {
  await apiClient.delete(`/quotes/${id}`);
};
