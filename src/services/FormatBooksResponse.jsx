export default function FormatBooksResponse(data) {
  let books = [];
  for (let item of data.items) {
    let book = {
      title: item.volumeInfo.title,
      isbn: item.volumeInfo.industryIdentifiers[0].identifier,
      image: item.volumeInfo.imageLinks?.thumbnail,
      publisher: item.volumeInfo.publisher,
      rating: 4.5,
      year: item.volumeInfo.publishedDate,
    };
    books.push(book);
  }
  return books;
}
