import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 100px;
  width: auto;

  transition: all 0.5s ease-in-out;

  @media screen and (max-width: ${props => props.theme.mediaWidths.shrinkWidth}) {
    height: 55px;
  }
`;

interface LogoProps {
  isLizardSpockMode: boolean;
  onClick?: () => void;
}

/**
 * Renders "Rock Paper Scissors" or "Rock Paper Scissor Lizard Spock"
 * @param isLizardSpockMode true: "Rock Paper Scissor Lizard Spock". false: "Rock Paper Scissors"
 * @param onClick optional onClick function
 */
const Logo = ({ isLizardSpockMode, onClick }: LogoProps): JSX.Element => (
  <Img
    onClick={onClick}
    src={isLizardSpockMode 
      ? "/images/logo-bonus.svg" 
      : "/images/logo.svg"
    }
    alt={
      isLizardSpockMode
        ? "Rock Paper Scissors Lizard Spock Logo"
        : "Rock Paper Scissors Logo"
    }
  />
);

export default Logo;
