import Footer from "./components/Footer";
import Header from "./components/Header";
import Quote from "./components/Quote";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center text-center bg-gray-100">
        <Header />
        <main className="flex-grow w-full bg-gray-600">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-8">
              Random quote:
            </h1>
            <Quote
              id={1}
              text="Цитата дня — самая важная вещь на свете."
              author="Марк Твен"
              writingYear={1876}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
