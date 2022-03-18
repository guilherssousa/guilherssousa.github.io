import { useTheme } from "styled-components";
import { Container, ThemeButtonContainer, ProfilePic } from "./styles";

import { MobileNavigation } from "../MobileNavigation";

interface HeaderProps {
  themeSwitcher: (newTheme: string) => void;
}

const Header = ({ themeSwitcher }: HeaderProps) => {
  const theme = useTheme();

  function handleChangeTheme() {
    const newTheme = theme.name === "light" ? "dark" : "light";
    themeSwitcher(newTheme);
  }

  return (
    <Container>
      <ThemeButtonContainer>
        <MobileNavigation />

        <button onClick={handleChangeTheme}>
          {theme.name == "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </ThemeButtonContainer>
      <ProfilePic>
        <img src={"/assets/profile_pic.webp"} alt="Sou eu!"></img>
        <span>Talvez esse site tenha um segredo, nunca se sabe...</span>
      </ProfilePic>
      <h2>Oi! Meu nome é Guilherme da Silva Sousa.</h2>
      <p>
        Desenvolvedor Fullstack no Mais Esports, atualmente cursando faculdade
        de Engenharia de Software na Universidade Estácio de Sá.
      </p>
    </Container>
  );
};

export { Header };
