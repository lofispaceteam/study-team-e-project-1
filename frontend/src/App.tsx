import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import AnimatedRightSlide from "./components/AnimatedRightSlide";
import { useQuote } from "./hooks/useQuote";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorCard from "./components/ErrorCard";
import Button from "./components/Button";
import EditQuoteModal from "./components/EditQuoteModal";
import { type Quote } from "./types/Quote";
import { useMutation } from "@tanstack/react-query";
import { deleteQuote } from "./api/quotesApi";

function App() {
  const {
    data: quote,
    isLoading,
    error,
    refetch: refetchRandomQuote,
  } = useQuote();

  const handleGetRandomQuote = () => {
    refetchRandomQuote();
  };

  const [changeQuoteModalIsOpen, setChangeQuoteModalIsOpen] = useState(false);

  const handleChangeQuote = () => {
    setChangeQuoteModalIsOpen(!changeQuoteModalIsOpen);
  };

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteQuote(id),
    onSuccess: () => {
      refetchRandomQuote();
    },
    onError: (error) => {
      console.error("Error while deleting the quote:", error);
    },
  });

  const handleDeleteQuote = () => {
    if (!quote) return;
    deleteMutation.mutate(quote.id);
  };

  const handleSaveQuote = (updatedQuote: Quote) => {
    console.log("Save:", updatedQuote);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center text-center bg-gray-100">
        <Header />
        <main className="flex-grow w-full bg-gray-600">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <AnimatedRightSlide>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-8">
                Random quote:
              </h1>
              {isLoading ? (
                <div className="m-10 py-5">
                  <LoadingSpinner />
                </div>
              ) : error ? (
                <ErrorCard message={error.message} />
              ) : quote ? (
                <>
                  <QuoteCard {...quote} />
                  <EditQuoteModal
                    isOpen={changeQuoteModalIsOpen}
                    onRequestClose={handleChangeQuote}
                    quote={quote!}
                    onSave={handleSaveQuote}
                  />
                </>
              ) : (
                <ErrorCard message="Ooops... We haven't found any quote!" />
              )}
              <Button text="Get random" onClick={handleGetRandomQuote} />
              <div className="flex flex-col gap-5 items-center justify-center mt-4 mb-4 p-6 text-white bg-gray-700">
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl text-white text-center"
                  mb-4
                >
                  Want to change this quote?
                </h1>
                <div className="flex flex-col gap-3 sm:flex-col lg:flex-row">
                  <Button
                    text="Change quote"
                    onClick={handleChangeQuote}
                  ></Button>
                  <Button
                    text="Delete quote"
                    onClick={handleDeleteQuote}
                  ></Button>
                </div>
              </div>
            </AnimatedRightSlide>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
