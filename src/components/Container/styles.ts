import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  color: #fff;
`;

export const Content = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1em;
  padding-bottom: 8em;
`;
