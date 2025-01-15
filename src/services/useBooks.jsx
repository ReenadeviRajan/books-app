import { useEffect, useState } from "react";
import FormatBooksResponse from "./FormatBooksResponse";
export function useBooks(query, callback) {
  const [books, setBooks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const controller = new AbortController();

  async function fetchPosts() {
    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`,
        {
          signal: controller.signal,
        }
      );
      const data = await response.json();

      if (!data.items) throw new Error("No books data available");
      setBooks(FormatBooksResponse(data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      //console.dir(error);
      if (error.name != "AbortError") {
        setError(error.message);
      }
      //console.log(error.message);
    }
  }
  useEffect(() => {
    fetchPosts();
    callback?.();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { isLoading, error, books };
}
