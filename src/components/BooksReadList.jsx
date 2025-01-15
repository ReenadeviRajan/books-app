import BookRead from "./BookRead";

export default function BooksReadList({ booksRead, deleteReadBook }) {
  return (
    <ul className="books-read-list">
      {booksRead.map((book) => (
        <BookRead
          book={book}
          key={book.title}
          deleteReadBook={() => deleteReadBook(book.id)}
        />
      ))}
    </ul>
  );
}
/**/
