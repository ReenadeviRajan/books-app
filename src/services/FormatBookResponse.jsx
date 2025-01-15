/*There was a delay when it was a normal function, so created separate file*/
export default function prepareBookObject(item) {
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

export function average(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}
