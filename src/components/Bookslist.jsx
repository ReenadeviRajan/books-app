import Book from "./Book";

export default function Bookslist({ booksData, handleSelectedId }) {
  return (
    <div>
      <ul className="books-list">
        {booksData.map((book) => (
          <Book
            book={book}
            key={book.title}
            handleSelectedId={() => handleSelectedId(book.id)}
          />
        ))}
      </ul>
    </div>
  );
}
