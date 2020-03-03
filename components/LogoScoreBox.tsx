import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  border-style: solid;
  border-color: ${props => props.theme.colors.headerOutline};
  border-width: 3px;
  border-radius: 17px;

  backdrop-filter: blur(6px);

  z-index: 6;

  @media screen and (max-width: ${props => props.theme.mediaWidths.shrinkWidth}) {
    width: 300px;
  }
`;


const LogoScoreBox: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default LogoScoreBox;
