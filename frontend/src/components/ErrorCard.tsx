import { type CustomError } from "../types/CustomError";
import AnimatedAppearance from "./AnimatedAppearance";

function ErrorCard({ message }: CustomError) {
  return (
    <AnimatedAppearance>
      <div className="flex flex-col items-center justify-center mb-4 p-6 text-white bg-gray-700">
        <p className="text-2xl sm:text-3xl md:text-4xl text-justify mb-4">
          {message}
        </p>
      </div>
    </AnimatedAppearance>
  );
}

export default ErrorCard;
