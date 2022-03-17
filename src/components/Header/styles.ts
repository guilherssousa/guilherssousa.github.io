import styled from "styled-components";
import media from "../../utils/mediaQuery";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 640px;
  margin: 3em auto 0em auto;

  ${media.lessThan("small")`
    margin: 1em auto 0em auto;
  `};

  img {
    height: 10em;
    width: 10em;
    border: 0.3em solid #fff;
    border-radius: 5em;
    margin: 0 auto;
  }

  h2 {
    margin-top: 1em;
  }

  p {
    font-size: 1.2em;
    margin-top: 0.5em;
    text-align: center;
  }
`;
