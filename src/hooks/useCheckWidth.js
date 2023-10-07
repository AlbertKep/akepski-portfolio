import { useState, useEffect } from "react";
const useCheckWidth = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  useEffect(() => {
    const checkCurrentWidth = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", checkCurrentWidth);

    return () => {
      window.removeEventListener("resize", checkCurrentWidth);
    };
  }, [currentWidth]);

  return currentWidth;
};

export default useCheckWidth;
