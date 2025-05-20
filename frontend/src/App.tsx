import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center text-center bg-gray-100">
        <main className="mb-auto w-[100%] flex-grow bg-gray-500">
          <h1 className="text-5xl flex-grow text-green-500">Test title</h1>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
