import { type Quote } from "./Quote";

export interface EditQuoteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  quote: Quote;
  onSave: (updatedQuote: Quote) => void;
}
