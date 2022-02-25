import styled from "styled-components";

const CardContainer = styled.div`
  column-count: 1;
  -webkit-column-count: 1;
  -moz-column-count:1;
  column-gap: 20px;
  -moz-column-gap: 20px;
  -webkit-column-gap: 20px;
  margin: 50px 0px;
  max-width: 98vw;

  @media (min-width: 620px) {
    column-count: 2;
    -webkit-column-count: 2;
    -moz-column-count:2;
  }
  @media (min-width: 920px) {
    column-count: 3;
    -webkit-column-count: 3;
    -moz-column-count:3;
  }
  @media (min-width: 1220px) {
    column-count: 4;
    -webkit-column-count: 4;
    -moz-column-count:4;
  }
`;

export default CardContainer;