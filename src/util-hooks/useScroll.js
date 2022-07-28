import { useMemo, useState, useEffect, useRef } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const scrollRef = useRef(scrollY);
  const isScrollingUp = useMemo(
    () => scrollY - scrollRef.current < 0,
    [scrollY]
  );
  const isScrollingDown = useMemo(
    () => scrollY - scrollRef.current > 0,
    [scrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      setScrollY(window.scrollY);
      scrollRef.current = window.scrollY;
    });
  }, []);

  return { isScrollingUp, isScrollingDown };
};

export { useScroll };
