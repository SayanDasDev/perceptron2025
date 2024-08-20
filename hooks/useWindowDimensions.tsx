"use client"

import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useWindowDimensions = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = debounce(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      }, 100);

      // Set the initial size
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        handleResize.cancel();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return size;
};

export default useWindowDimensions;
