import styled from "styled-components";
import media from "../../utils/mediaQuery";

export const Container = styled.section`
  margin-top: 1em;
  font-size: 1.2em;

  h1 {
    font-size: 2em;
    ${media.lessThan("small")`
      font-size: 1.8em;
    `};
  }

  p {
    margin-top: 0.5em;

    white-space: pre-line;

    & + p {
      margin-top: 0.8em;
    }

    strong {
      color: ${(props) => props.theme.primary};
    }
  }

  a {
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    text-decoration: none;
  }

  i {
    margin-right: 0.25em;
  }

  ul {
    margin-top: 0.5em;
    list-style: none;
  }

  li + li {
    margin-top: 0.5em;
  }
`;
