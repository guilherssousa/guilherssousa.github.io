import styled from "styled-components";
import media from "../../utils/mediaQuery";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;
`;

export const Content = styled.div`
  width: 60%;
  height: 100%;
  padding: 1.5em;
  background-color: ${(props) => props.theme.backgroundColor};

  animation: slideIn 0.3s ease-in-out;

  &.close {
    animation: slideOut 0.4s ease-in-out;
  }

  @keyframes slideIn {
    from {
      background-color: transparent;
      transform: translateX(-100%);
    }
    to {
      background-color: ${(props) =>
        props.theme.name && props.theme.backgroundColor};
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      background-color: ${(props) =>
        props.theme.name && props.theme.backgroundColor};
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
      background-color: transparent;
    }
  }
`;

export const ToggleNavButton = styled.button`
  display: none;
  appearance: none;
  border: 0;
  outline: 0;
  background: none;

  ${media.lessThan("small")`
    display: block;
  `};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.textColor};
  display: block;
  font-size: 1.2em;
  text-decoration: none;
  padding: 0.5em;
  font-weight: bold;
`;
