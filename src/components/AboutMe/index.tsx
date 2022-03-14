import { Section } from "../../components/Section";
import { BsBehance, BsGithub, BsLinkedin, BsSpotify } from "react-icons/bs";

const AboutMe = () => {
  return (
    <Section id="about-me">
      <h1>Sobre mim</h1>

      <p>
        Desenvolvedor Fullstack, me considero um entusiasta de soluções e como
        elas podem ser usadas para impactar o nosso cotidiano. Gosto de
        desenvolver usando React e seus frameworks, além de escrever alguns
        back-ends e soluções mais alternativas de vez em quando.
      </p>
      <p>
        Falo <strong>Inglês intermediário (suficiente a nível Técnico)</strong>,
        além de <strong>Português nativo.</strong>
      </p>
      <p>
        Gosto de <strong>design gráfico</strong>,{" "}
        <strong>edição de vídeo</strong>, <strong>automações</strong>,{" "}
        <strong>café</strong> e <strong>gatos</strong>. Adepto da religião dos
        monitores ultrawide e hater de sites que não são otimizados pra eles.
      </p>

      <p>Eu tenho muitas redes sociais, mas uso essas como as principais:</p>

      <ul>
        <li>
          <BsGithub />{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/guilherssousa/"
          >
            GitHub
          </a>
        </li>
        <li>
          <i>
            <BsLinkedin />
          </i>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/guilhermedasilvasousa/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <i>
            <BsSpotify />
          </i>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/user/f0mg1ppcpollg45sozzd9gu14?si=01b62e080ff14e4a"
          >
            Spotify
          </a>
        </li>
        <li>
          <i>
            <BsBehance />
          </i>{" "}
          <a target="_blank" rel="noreferrer" href="https://be.net/madebygui">
            Behance
          </a>
        </li>
      </ul>
    </Section>
  );
};

export { AboutMe };
