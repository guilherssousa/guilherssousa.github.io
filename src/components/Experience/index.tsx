import { Section } from "../Section";

import { Container, Work, Details, Name } from "./styles";

import experience from "../../data/experience.json";

import imageUrl from "../../utils/imageUrl";

const Experience = () => {
  return (
    <Section id="experience">
      <h1>Experiência</h1>

      <Container>
        {experience.map((work, index) => (
          <Work key={`experience-${index}`}>
            <img
              height={60}
              width={60}
              src={work.imageUrl}
              alt={work.company}
            ></img>
            <Details>
              <Name>{work.company}</Name>
              <div>{work.position}</div>
              <div>Período: {work.period}</div>
              <p>{work.description}</p>
            </Details>
          </Work>
        ))}
      </Container>
    </Section>
  );
};

export { Experience };
