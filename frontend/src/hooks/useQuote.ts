import { type Quote } from "../types/Quote";

import { useQuery } from "@tanstack/react-query";
import { getRandomQuote } from "../api/quotesApi";

export const useQuote = () => {
  return useQuery<Quote, Error>({
    queryKey: ["quoteRandom"],
    queryFn: () => getRandomQuote(),
    staleTime: 1000 * 60 * 60 * 2, // data is fresh for 2 hours
    retry: 2,
  });
};
