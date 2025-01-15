import { useEffect, useRef, useState } from "react";
import prepareBookObject from "../services/FormatBookResponse";
import StarRating from "../StarRating/StarRating";
import Loader from "./Loader";

export default function BookDetails({
  selectedId,
  handleBack,
  onBookRead,
  booksRead,
}) {
  const [book, setBook] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current = countRef.current + 1;
  }, [userRating]);

  const isRated = booksRead.map((book) => book.id).includes(selectedId);
  const ratedBook = booksRead.find((book) => book.id == selectedId);

  async function getBookDetails() {
    setIsLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${selectedId}`
    );
    const bookDetails = await response.json();

    setBook(prepareBookObject(bookDetails));
    setIsLoading(false);
  }

  //component mounted and selectID changed
  useEffect(
    function () {
      getBookDetails();
    },
    [selectedId]
  );

  useEffect(() => {
    if (!book) return;
    document.title = `Book - ${book.title}`;
    return () => {
      console.log(book.title);
      document.title = "Books DB";
    }; // closure function, it will able to remeber all the function and properites
  }, [book]);

  function handleReadBook() {
    onBookRead({ ...book, userRating, ratingCount: countRef.current });
    handleBack(); /*to go back automatically*/
  }
  return (
    <div>
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="book-details">
          <div className="d-flex" style={{ gap: "10px" }}>
            <div>
              <img src={book.image} />
            </div>
            <div>
              <h2>{book.title}</h2>
              <h3>{book.subTitle}</h3>

              <ul>
                <li>Year: {book.year}</li>
                <li>Publisher: {book.publisher}</li>
                <li>ISBN: {book.isbn}</li>
              </ul>
            </div>
          </div>
          <div>
            {isRated ? (
              "You are already rated"
            ) : (
              <div>
                <div>Rate Book: </div>

                <StarRating
                  maxRating={10}
                  color="#fc4199"
                  defaultRating={5}
                  onSetRating={setUserRating}
                />
                {userRating > 0 && (
                  <div onClick={handleReadBook}>
                    <button>Add to list</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
