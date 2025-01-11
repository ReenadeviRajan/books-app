import Book from "./Book";

export default function Bookslist({ booksData }) {
  return (
    <div>
      <ul className="books-list">
        {booksData.map((book) => (
          <Book book={book} key={book.title} />
        ))}
      </ul>
    </div>
  );
}