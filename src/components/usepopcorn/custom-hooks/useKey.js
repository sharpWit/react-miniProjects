import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callBalck(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBalck);
      return function () {
        document.removeEventListener("keydown", callBalck);
      };
    },
    [action, key]
  );
}
