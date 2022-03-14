import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;
  margin-top: 1em;
`;

export const Project = styled.a`
  color: #fff !important;
  font-weight: 500 !important;
  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ProjectImage = styled.img`
  width: 360px;
  height: 200px;
  aspect-ratio: 16/9;
  border-radius: 0.5em;
  border: 1px solid #eeee;
  background-color: white;
`;

export const ProjectName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;
  margin-top: 0.25em;

  svg {
    margin-left: 0.25em;
  }
`;

export const ProjectYear = styled.div`
  color: #fff;
  font-size: 0.9em;
`;
