import { Section } from "../Section";

import {
  Container,
  Project,
  ProjectData,
  ProjectName,
  ProjectYear,
} from "./styles";

import { BiLinkAlt } from "react-icons/bi";

import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <Section id="projects">
      <h1>Projetos</h1>

      <Container>
        {projects.map((project, index) => (
          <Project
            href={project.url}
            target="_blank"
            rel="noreferrer"
            key={`project-${index}`}
          >
            <ProjectData>
              <ProjectName>
                {project.name} <BiLinkAlt />
              </ProjectName>
              <ProjectYear>{project.year}</ProjectYear>
              <p>{project.description}</p>
            </ProjectData>
          </Project>
        ))}
      </Container>
    </Section>
  );
};

export { Projects };
