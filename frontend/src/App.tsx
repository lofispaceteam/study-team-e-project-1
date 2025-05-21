import Footer from "./components/Footer";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import AnimatedRightSlide from "./components/AnimatedRightSlide";
import { useQuote } from "./hooks/useQuote";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorCard from "./components/ErrorCard";
import Button from "./components/Button";

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
                <QuoteCard
                  id={quote.id}
                  text={quote.text}
                  author={quote.author}
                  writingYear={quote.writingYear}
                />
              ) : (
                <ErrorCard message="Ooops... We haven't found any quote!" />
              )}
              <Button text="Get random" onClick={handleGetRandomQuote} />
            </AnimatedRightSlide>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
