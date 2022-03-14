import styled from "styled-components";
import media from "../../utils/mediaQuery";

export const Container = styled.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`;

export const Work = styled.div`
  display: flex;

  & + & {
    margin-top: 1em;
  }

  align-items: flex-start;

  img {
    width: 60px;
    border-radius: 30px;
    ${media.lessThan("small")`
      display: none;
    `};
  }
`;

export const Details = styled.div`
  ${media.greaterThan("small")`
    margin-left: 1em;
  `};
  margin-top: 0em;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;
