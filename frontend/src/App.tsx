import Footer from "./components/Footer";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import AnimatedRightSlide from "./components/AnimatedRightSlide";
import { useQuote } from "./hooks/useQuote";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorCard from "./components/ErrorCard";

function App() {
  const { data: quote, isLoading, error } = useQuote(1);

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
                <div className="p-5">
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
            </AnimatedRightSlide>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
