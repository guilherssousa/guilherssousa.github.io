import styled from "styled-components";
import media from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  margin-top: 1em;

  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;

  color: ${(props) => props.theme.textColor} !important;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}; */
`;

export const Project = styled.a`
  font-weight: 500 !important;
  transition: filter 0.2s ease-out;
  color: ${(props) => props.theme.textColor} !important;
  display: block;
  margin: 0 0.5em;

  &:hover {
    filter: brightness(0.9);
  }

  & + & {
    margin-top: 2em;
  }
`;

export const ProjectImage = styled.img`
  width: 360px;
  aspect-ratio: 16/9;
  border-radius: 0.5em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
`;

export const ProjectData = styled.div``;

export const ProjectName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;

  svg {
    margin-left: 0.25em;
  }
`;

export const ProjectYear = styled.div`
  color: ${(props) => props.theme.textColor} !important;
  font-size: 0.9em;
`;
