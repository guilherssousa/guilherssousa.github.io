import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

import { AboutMe } from "../../components/AboutMe";
import { Experience } from "../../components/Experience";
import { Education } from "../../components/Education";
import { Projects } from "../../components/Projects";

interface HomeProps {
  themeSwitcher: () => void;
}

const Home = ({ themeSwitcher }: HomeProps) => {
  return (
    <Container>
      <Header themeSwitcher={themeSwitcher} />
      <Navigation />

      <AboutMe />
      <Experience />
      <Education />
      <Projects />
    </Container>
  );
};

export default Home;
