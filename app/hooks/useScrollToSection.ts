// hooks/useScrollToSection.js
import { useCallback } from "react";

const useScrollToSection = (id: string, offset = 0) => {
  return useCallback(() => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }, [id, offset]);
};

export default useScrollToSection;
