import React from "react";
import styled from "styled-components";
import logo from "../../images/og/logo.png";

const LogoWrapper = styled.div`
  display: block;
  float: left;
  width: 15vw;

  @media only screen and (max-width: 768px) {
    padding: 0px 2.76vw;
  }
`;

const StyledLogo = styled.img`
  height: 58px;

  @media only screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <a href="/">
        <StyledLogo src={logo} />
      </a>
    </LogoWrapper>
  );
};

export default Logo;
