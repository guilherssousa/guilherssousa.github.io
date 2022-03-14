import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

import { AboutMe } from "../../components/AboutMe";
import { Experience } from "../../components/Experience";
import { Education } from "../../components/Education";
import { Projects } from "../../components/Projects";

const Home = () => {
  return (
    <Container>
      <Header />
      <Navigation />

      <AboutMe />
      <Experience />
      <Education />
      <Projects />
    </Container>
  );
};

export default Home;
