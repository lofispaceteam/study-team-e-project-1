import { type Quote } from "../types/Quote";
import AnimatedAppearance from "./AnimatedAppearance";

function QuoteCard({ id, text, author, writingYear }: Quote) {
  return (
    <AnimatedAppearance>
      <div
        key={id}
        className="flex flex-col items-center justify-center mb-4 p-6 text-white bg-gray-700"
      >
        <p className="text-2xl sm:text-3xl break-words md:text-4xl text-justify mb-4 break-all">
          {text}
        </p>

        <div className="self-end mt-auto text-right sm:text-xs md:text-xl p-3">
          <p className="font-semibold">
            {author}, {writingYear}
          </p>
          {/* <p className="text-sm">{writingYear}</p> */}
        </div>
      </div>
    </AnimatedAppearance>
  );
}

export default QuoteCard;
