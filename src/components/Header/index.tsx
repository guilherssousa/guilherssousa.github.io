import { Container } from "./styles";

import imageUrl from "../../utils/imageUrl";

const Header = () => {
  return (
    <Container>
      <img src={"/assets/profile_pic.webp"} alt="Sou eu!"></img>
      <h2>Oi! Meu nome é Guilherme da Silva Sousa.</h2>
      <p>
        Desenvolvedor Fullstack no Mais Esports, atualmente cursando faculdade
        de Engenharia de Software na Universidade Estácio de Sá.
      </p>
    </Container>
  );
};

export { Header };
