import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollPosition, setscrollPosition] = useState(null);

  const handleScroll = () => {
    setscrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
