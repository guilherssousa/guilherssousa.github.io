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
<<<<<<< HEAD
              src={work.imageUrl}
=======
              src={imageUrl(`${work.imageUrl}?w=60&h=60&webp`)}
>>>>>>> 0600537420081706d863c049ac17ddd9e5c22cff
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
