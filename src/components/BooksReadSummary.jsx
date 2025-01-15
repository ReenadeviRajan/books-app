import { average } from "../services/FormatBookResponse";

export default function BooksReadSummary({ booksRead }) {
  const rating = average(booksRead.map((book) => book.rating));
  const userRating = average(booksRead.map((book) => book.userRating));
  return (
    <div className="summary">
      <h3>Books Read</h3>
      <div className="d-flex justify-content-between">
        <div>
          <span>Total books: </span>
          <span>{booksRead.length} Books</span>
        </div>
        <div>
          <span>Rating:</span>
          <span>{rating || 0}*</span>{" "}
          {/*NaN displayed so to avoid this condition given*/}
        </div>
        <div>
          <span>User Rating: </span>
          <span>{userRating || 0}*</span>
        </div>
      </div>
    </div>
  );
}
