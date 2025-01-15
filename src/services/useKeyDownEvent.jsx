import { useEffect } from "react";

export function useKeyDownEvent(key, action) {
  // to go back to page while pressing esc
  useEffect(() => {
    //console.log(e); // KeyboardEvent{isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false,…}
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
        console.log("closing");
      }
    }
    // useeffects will be retained for longer time, cleanup required
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [key, action]);
}
