function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer className="flex w-[100%] justify-center items-center text-center bg-gray-900 text-white py-6">
      <div className="container mt-auto px-4">
        <p className="text-1xl font-bold ">© LofiSpace – QuotesApp – {year}.</p>
      </div>
    </footer>
  );
}

export default Footer;
