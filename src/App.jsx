import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import NumResults from "./components/NumResults";
import ListBox from "./components/ListBox";
import Bookslist from "./components/Bookslist";
import BooksReadList from "./components/BooksReadList";
import BooksReadSummary from "./components/BooksReadSummary";
import FormatBooksResponse from "./services/FormatBooksResponse";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Search from "./components/Search";
import BookDetails from "./components/BookDetails";
import { useBooks } from "./services/useBooks";
import { useLocalStorage } from "./services/useLocalStorage";
import { useKeyDownEvent } from "./services/useKeyDownEvent";

const Books = [
  {
    isbn: "9788129112859",
    title: "I BOUGHT THE MONKS FERRARI",
    rating: 4.3,
    year: 2001,
    publisher: "Rupa Publications India",
    image: "https://covers.openlibrary.org/b/id/6903838-M.jpg",
  },
  {
    isbn: "9780618263225",
    title: "The Lord of the Rings",
    rating: 4.3,
    year: 2004,
    publisher: "HarperCollins Publishers",
    image: "https://covers.openlibrary.org/b/id/393992-M.jpg",
  },
  {
    isbn: "9780984221233",
    title: "A Python Book",
    rating: 4.3,
    year: 2006,
    publisher: 'Platypus Global Media"',
    image:
      "http://books.google.com/books/content?id=1FL-ygAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    isbn: "9781521546185",
    title: "React. Js Book",
    rating: 4.3,
    year: 2008,
    publisher: "Packt Publishers",
    image:
      "http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
];

const BooksRead = [
  {
    isbn: "9788129112859",
    title: "I BOUGHT THE MONKS FERRARI",
    rating: 4.3,
    year: 2001,
    publisher: "Rupa Publications India",
    image: "https://covers.openlibrary.org/b/id/6903838-M.jpg",
  },
  {
    isbn: "9780618263225",
    title: "The Lord of the Rings",
    rating: 4.3,
    year: 2004,
    publisher: "HarperCollins Publishers",
    image: "https://covers.openlibrary.org/b/id/393992-M.jpg",
  },
  {
    isbn: "9780984221233",
    title: "A Python Book",
    rating: 4.3,
    year: 2006,
    publisher: 'Platypus Global Media"',
    image:
      "http://books.google.com/books/content?id=1FL-ygAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    isbn: "9781521546185",
    title: "React. Js Book",
    rating: 4.3,
    year: 2008,
    publisher: "Packt Publishers",
    image:
      "http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
];
const KEY = `AIzaSyDd8zjqw7paHROuV-wUP-ZNvUXmGornx0c`;
function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const { isLoading, error, books } = useBooks(query, handleBack);

  const [booksRead, setReadBooks] = useLocalStorage([], "readlist");

  useKeyDownEvent("Escape", handleBack);

  function handleSelectedId(id) {
    setSelectedId((selectedId) =>
      id === selectedId ? "" : id
    ); /*to close the page when we select same book */
  }

  function handleBack() {
    setSelectedId("");
  }

  function handleBookRead(book) {
    setReadBooks((b) => [...b, book]);
  }

  function deleteReadBook(bookId) {
    let booksData = booksRead.filter((book) => book.id != bookId);
    setReadBooks(booksData);
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults booksData={books} />
      </NavBar>
      <MainContent>
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <Bookslist booksData={books} handleSelectedId={handleSelectedId} />
          )}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          {selectedId ? (
            <BookDetails
              selectedId={selectedId}
              handleBack={handleBack}
              onBookRead={handleBookRead}
              booksRead={booksRead}
            />
          ) : (
            <>
              <BooksReadSummary booksRead={booksRead} />
              <BooksReadList
                booksRead={booksRead}
                deleteReadBook={deleteReadBook}
              />
            </>
          )}
          {/*if book selected Bookdetails must be shown, other wise book details */}
        </ListBox>
      </MainContent>
    </>
  );
}

export default App;
