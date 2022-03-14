import { useState, useRef } from "react";
import { Container, Content, ToggleNavButton, Link } from "./styles";

import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  async function handleToggleNavbar() {
    if (isOpen) {
      if (navRef.current) navRef.current.classList.add("close");
      await setTimeout(() => setIsOpen(false), 300);
      return;
    }
    setIsOpen(true);
  }

  return (
    <>
      {isOpen && (
        <Container>
          <Content ref={navRef}>
            <ToggleNavButton onClick={handleToggleNavbar}>
              <IoClose color={"#fff"} size={45} />
            </ToggleNavButton>

            <Link href="#about-me" onClick={handleToggleNavbar}>
              Sobre mim
            </Link>
            <Link href="#experience" onClick={handleToggleNavbar}>
              Experiência
            </Link>
            <Link href="#education" onClick={handleToggleNavbar}>
              Formação Acadêmica
            </Link>
            <Link href="#projects" onClick={handleToggleNavbar}>
              Projetos
            </Link>
          </Content>
        </Container>
      )}
      <ToggleNavButton onClick={handleToggleNavbar}>
        <HiMenuAlt2 color={"#fff"} size={45} />
      </ToggleNavButton>
    </>
  );
};

export { MobileNavigation };
