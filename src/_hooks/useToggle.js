import { useState, useCallback } from "react";

export default function useToggle(initialValue = false) {
  const [Value, setValue] = useState(initialValue);
  const handler = useCallback(() => {
    if (window.scrollY > 250) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      setValue(true);
      return;
    }
    setValue((prev) => !prev);
  }, []); // toggle 작성 모듈
  return [Value, handler, setValue];
}
