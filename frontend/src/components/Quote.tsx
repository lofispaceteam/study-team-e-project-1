interface QuoteProps {
  id: number;
  text: string;
  author: string;
  writingYear: number;
}

function Quote({ id, text, author, writingYear }: QuoteProps) {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center mb-4 p-6 text-white bg-gray-700"
    >
      <p className="text-2xl sm:text-3xl md:text-4xl text-justify mb-4">
        {text}
      </p>

      <div className="self-end mt-auto text-right sm:text-xs md:text-xl p-3">
        <p className="font-semibold">
          {author}, {writingYear}
        </p>
        {/* <p className="text-sm">{writingYear}</p> */}
      </div>
    </div>
  );
}

export default Quote;
