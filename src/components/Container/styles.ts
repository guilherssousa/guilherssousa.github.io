import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${(props) => props.theme.textColor};
  position: relative;
`;

export const Overlay = styled.div`
  background: ${(props) => {
    const svg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${props.theme.patternStrokeColor}'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`;
    return props.theme.name == "dark"
      ? `${svg}, ${props.theme.backgroundGradient}`
      : `${svg}`;
  }};

  mask-image: radial-gradient(at top, rgba(255, 255, 255, 0.8), transparent);

  position: absolute;
  pointer-events: none;

  height: 100%;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1.5em;
  padding-bottom: 8em;
  position: relative;
  z-index: 10;
`;
