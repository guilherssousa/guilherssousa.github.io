import React from "react";
import { Wrapper, Content, Overlay } from "./styles";

const Container: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Overlay />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export { Container };
