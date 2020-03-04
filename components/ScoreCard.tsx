import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${props => props.theme.colors.lightWhite};
  width: 120px;
  height: 100px;
  border-radius: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.mediaWidths.shrinkWidth}) {
    width: 70px;
    height: 55px;
  }
`;

const Title = styled.div`
  letter-spacing: 2px;
  color: ${props => props.theme.colors.scoreText};

  @media screen and (max-width: ${props => props.theme.mediaWidths.shrinkWidth}) {
    letter-spacing: 1px;
   
  }
`;

const Score = styled.div`
  font-weight: ${props => props.theme.fonts.bigWeight};
  font-size: 50px;

  color: ${props => props.theme.colors.darkText};

  @media screen and (max-width: ${props => props.theme.mediaWidths.shrinkWidth}) {
    font-size: 28px;
  }
`;

const ScoreCard: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <Card>
      <Title>SCORE</Title>
      <Score>{children}</Score>
    </Card>
  );
};

export default ScoreCard;
