import { useEffect, useState } from "react";
import { type QuoteProps } from "../types/QuoteProps";
import { getQuoteById } from "../api/quotesApi";

export const useQuotes = () => {
  const [quote, setQuote] = useState<QuoteProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuoteById(1);
        setQuote(data);
      } catch (err) {
        setError("Loading quote error");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { quote, loading, error };
};
