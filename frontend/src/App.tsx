import Footer from "./components/Footer";
import Header from "./components/Header";
import Quote from "./components/Quote";
import AnimatedPage from "./components/AnimatedRightSlide";
import { useQuotes } from "./hooks/useQuote";

function App() {
  const { quote, loading, error } = useQuotes();

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center text-center bg-gray-100">
        <Header />
        <main className="flex-grow w-full bg-gray-600">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <AnimatedPage>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-8">
                Random quote:
              </h1>
              {loading ? (
                <p>Загрузка...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <Quote
                  id={quote.id}
                  text={quote.text}
                  author={quote.author}
                  writingYear={quote.writingYear}
                />
              )}
            </AnimatedPage>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
