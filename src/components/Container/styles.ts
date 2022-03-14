import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  color: #fff;
  position: relative;
`;

export const Overlay = styled.div`
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(240 232 213 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"),
    linear-gradient(
      83.2deg,
      rgba(33, 31, 88, 1) 10.8%,
      rgba(43, 54, 87, 1) 94.3%
    );
  mask-image: linear-gradient(to top, transparent, white);

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
