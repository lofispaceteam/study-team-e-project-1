import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import { type EditQuoteModalProps } from "../types/EditQuoteModalProps";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuote } from "../api/quotesApi";

const EditQuoteModal: React.FC<EditQuoteModalProps> = ({
  isOpen,
  onRequestClose,
  quote,
  onSave, // можно оставить для обновления UI локально
}) => {
  const [text, setText] = useState(quote.text);
  const [author, setAuthor] = useState(quote.author);
  const [writingTime, setWritingTime] = useState(quote.writing_time);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () =>
      updateQuote(quote.id, {
        id: quote.id,
        text,
        author,
        writing_time: writingTime,
        creation_time: quote.creation_time,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
      queryClient.invalidateQueries({ queryKey: ["quote", quote.id] });
      queryClient.invalidateQueries({ queryKey: ["random"] });
      onSave?.(data);
      onRequestClose();
    },
    onError: (error) => {
      console.error("Error while updating the qute:", error);
    },
  });

  const handleSave = () => {
    mutation.mutate();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Change quote"
      className="outline-none focus:outline-none min-w-base sm:w-xs"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
    >
      <div className="bg-gray-500 rounded-lg shadow-lg p-6 w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4">
          Change quote:
        </h2>

        <div className="mb-4">
          <label className="block text-2sm font-medium text-gray-200">
            Text of quote
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
            className="w-full text-white border focus:outline--red-500 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium text-gray-200">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="w-full text-white border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium text-gray-200">
            Writing year
          </label>
          <input
            type="number"
            value={writingTime}
            onChange={(e) => setWritingTime(e.target.value)}
            placeholder="Writing year"
            className="w-full text-white border rounded px-3 py-2"
          />
        </div>

        <div className="flex justify-between items-center mt-6">
          <Button
            text={mutation.isPending ? "Saving..." : "Save"}
            onClick={handleSave}
          />
          <Button text="Close" onClick={onRequestClose} />
        </div>
      </div>
    </Modal>
  );
};

export default EditQuoteModal;
