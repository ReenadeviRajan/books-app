import { useEffect, useRef } from "react";
import { useKeyDownEvent } from "../services/useKeyDownEvent";

export default function Search({ query, setQuery }) {
  const inputRef = useRef(null);

  useKeyDownEvent("Enter", function () {
    const activeElement = document.activeElement;
    inputRef.current.focus();
    if (activeElement != inputRef.current) {
      setQuery(""); // search box data should get rest if we are not currently searching
    }
  });

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search books"
        value={query}
        ref={inputRef}
        onInput={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
