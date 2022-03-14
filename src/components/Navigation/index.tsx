import { useRef, useState, useEffect } from "react";
import { Container, Link, ToTopButton } from "./styles";

import { BsArrowUpShort } from "react-icons/bs";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigationRef = useRef(null);
  const toTopRef = useRef<HTMLDivElement>(null);

  function handleObserver(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  function handleNavigateToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (toTopRef.current) toTopRef.current.classList.add("disabling");
  }

  useEffect(() => {
    let options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (navigationRef.current) observer.observe(navigationRef.current);

    return () => {
      if (navigationRef.current) observer.unobserve(navigationRef.current);
    };
  }, []);

  return (
    <>
      <Container ref={navigationRef}>
        <Link href="#about-me">Sobre mim</Link>
        <Link href="#experience">Experiência</Link>
        <Link href="#education">Formação Acadêmica</Link>
        <Link href="#projects">Projetos</Link>
      </Container>
      {!isVisible && (
        <ToTopButton ref={toTopRef} onClick={handleNavigateToTop}>
          Retornar ao topo <BsArrowUpShort size={28} />
        </ToTopButton>
      )}
    </>
  );
};

export { Navigation };
