import { type Quote } from "../types/Quote";

import { useQuery } from "@tanstack/react-query";
import { getQuoteById } from "../api/quotesApi";

export const useQuote = (id: number) => {
  console.log(id);
  return useQuery<Quote, Error>({
    queryKey: ["quoteById"],
    queryFn: () => getQuoteById(id),
    enabled: !!id, // if there isn't id, it won't launch
    staleTime: 1000 * 60 * 60 * 2, // data is fresh for 2 hours
    retry: 2,
  });
};
