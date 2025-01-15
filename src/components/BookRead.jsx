export default function BookRead({ book, deleteReadBook }) {
  return (
    <li
      className="d-flex"
      style={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <div className="d-flex">
        <img src={book.image} />
        <div>
          <h3>{book.title}</h3>
          <div className="d-flex" style={{ gap: "10px" }}>
            <div>
              <span>*</span>
              <span>{book.rating}</span>
            </div>
            <div>
              <span>*</span>
              <span>{book.userRating}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#" onClick={deleteReadBook}>
          X
        </a>
      </div>
    </li>
  );
}
