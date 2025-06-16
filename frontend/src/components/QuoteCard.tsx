import { type Quote } from "../types/Quote";
import AnimatedAppearance from "./AnimatedAppearance";

function QuoteCard({ id, text, author, writing_time }: Quote) {
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
            {author}, {writing_time}
          </p>
          {/* <p className="text-sm">{writing_time}</p> */}
        </div>
      </div>
    </AnimatedAppearance>
  );
}

export default QuoteCard;
