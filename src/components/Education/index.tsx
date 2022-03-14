import { Section } from "../Section";

import { Container } from "./styles";

import education from "../../data/education.json";

const Education = () => {
  return (
    <Section id="education">
      <h1>Formação Acadêmica</h1>
      {education.map((academic, index) => (
        <Container key={`academic-${index}`}>
          <strong>{academic.area}</strong>
          <span>{academic.institution}</span>
          <span>Estado: {academic.status}</span>
          <span>Período: {academic.period}</span>
        </Container>
      ))}
    </Section>
  );
};

export { Education };
