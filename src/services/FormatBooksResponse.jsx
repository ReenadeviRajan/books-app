export default function FormatBookResponse(booksData) {
  let books = [];
  for (let item of booksData.items) {
    if (item.volumeInfo.industryIdentifiers) {
      let book = prepareBookObject(item);
      books.push(book);
    }
  }
  return books;
}

function prepareBookObject(item) {
  let book = {
    id: item.id,
    title: item.volumeInfo.title,
    isbn: item.volumeInfo.industryIdentifiers[0].identifier,
    image: item.volumeInfo.imageLinks?.thumbnail,
    publisher: item.volumeInfo.publisher,
    rating: 4.5,
    year: item.volumeInfo.publishedDate,
  };
  return book;
}
