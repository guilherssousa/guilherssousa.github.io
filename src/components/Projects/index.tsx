import { Section } from "../Section";

import {
  Grid,
  Project,
  ProjectImage,
  ProjectName,
  ProjectYear,
} from "./styles";

import { BiLinkAlt } from "react-icons/bi";

import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <Section id="projects">
      <h1>Projetos</h1>

      <Grid>
        {projects.map((project, index) => (
          <Project
            href="https://correioanonimo.com.br"
            target="_blank"
            rel="noreferrer"
            key={`project-${index}`}
          >
            <ProjectImage
              src={`${project.imageUrl}?w=360&h=225&webp`}
              alt={project.name}
            ></ProjectImage>
            <ProjectName>
              {project.name} <BiLinkAlt />
            </ProjectName>
            <ProjectYear>{project.year}</ProjectYear>
            <p>{project.description}</p>
          </Project>
        ))}
      </Grid>
    </Section>
  );
};

export { Projects };
