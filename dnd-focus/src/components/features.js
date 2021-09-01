import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  width: 98%;
  background-color: lightblue;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Text = styled.p`
  margin: 1% 1% 1% 1%;
`;

const Features = ({ character }) => {
  return (
    <Container>
      <h3>Features</h3>
      
    </Container>
  );
};

export default Features;