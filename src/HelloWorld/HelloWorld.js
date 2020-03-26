import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
`;

export const HelloWorld = ({ children }) => {
  return <Title>{children}</Title>;
};
