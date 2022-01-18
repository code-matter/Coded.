import React, { useState, useEffect } from "react";

export const useMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleOnWindowChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleOnWindowChange);
    return () => {
      window.removeEventListener("resize", handleOnWindowChange);
    };
  }, []);

  const isMobile = width <= 748;

  return isMobile;
};
