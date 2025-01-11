import { useState } from "react";
import BooksReadList from "./BooksReadList";
import BooksReadSummary from "./BooksReadSummary";

export default function StudiedList({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <div style={{ textAlign: "end" }}>
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "+" : "-"}
        </button>
      </div>
      {isOpen && children}
    </div>
  );
}
