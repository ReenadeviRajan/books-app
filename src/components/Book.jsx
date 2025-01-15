// Stateless Component - this doesn't have any state
export default function Book({ book, handleSelectedId }) {
  return (
    <div>
      <li className="book" onClick={handleSelectedId}>
        <img src={book.image} />
        <div>
          <h3>{book.title}</h3>
          <div>Year: {book.year}</div>
        </div>
      </li>
    </div>
  );
}
