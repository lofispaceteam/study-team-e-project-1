import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import { type EditQuoteModalProps } from "../types/EditQuoteModalProps";

const EditQuoteModal: React.FC<EditQuoteModalProps> = ({
  isOpen,
  onRequestClose,
  quote,
  onSave,
}) => {
  const [text, setText] = useState(quote.text);
  const [author, setAuthor] = useState(quote.author);
  const [writingYear, setWritingYear] = useState(quote.writingYear);

  const handleSave = () => {
    onSave({
      ...quote,
      text,
      author,
      writingYear: Number(writingYear),
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Change quote"
      className="outline-none focus:outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Изменить цитату</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Text of quote
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Writing year
          </label>
          <input
            type="number"
            value={writingYear}
            onChange={(e) => setWritingYear(Number(e.target.value))}
            placeholder="Writing year"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button text="Save" onClick={handleSave} />
          <Button text="Close" onClick={onRequestClose} />
        </div>
      </div>
    </Modal>
  );
};

export default EditQuoteModal;
