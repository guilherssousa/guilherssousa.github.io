import React from "react";
import { Wrapper, Content } from "./styles";

const Container: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export { Container };
