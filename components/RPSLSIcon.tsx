import React from "react";
import styled from "styled-components";

const MainIconContainer = styled.div<{ icon: string, isSmaller?: boolean }>`
  width: ${props => props.isSmaller ? '100px' : '150px'};
  height: ${props => props.isSmaller ? '100px' : '150px'};;

  border-radius: 50%;

  transition: box-shadow 0.3s ease-in-out, width 1s ease-in-out .5s, height 1s ease-in-out .5s;
`;

const IconContainer = styled.div<{ icon: string }>`
  width: 100%;
  height: 100%;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  box-shadow: 0 7px 1px
    ${props => {
      switch (props.icon) {
        case "rock":
          return props.theme.colors.rockShadow;
        case "paper":
          return props.theme.colors.paperShadow;
        case "scissors":
          return props.theme.colors.scissorsShadow;
        case "lizard":
          return props.theme.colors.lizardShadow;
        case "spock":
          return props.theme.colors.spockShadow;
        default:
          return props.theme.colors.rockShadow;
      }
    }};

  background: ${props => {
    switch (props.icon) {
      case "rock":
        return props.theme.gradients.rock;
      case "paper":
        return props.theme.gradients.paper;
      case "scissors":
        return props.theme.gradients.scissors;
      case "lizard":
        return props.theme.gradients.lizard;
      case "spock":
        return props.theme.gradients.spock;
      default:
        return props.theme.gradients.rock;
    }
  }};
`;

const ImgContainer = styled.div<{isSmaller?: boolean}>`
  width: ${props => props.isSmaller ? '76px' : '115px'};
  height: ${props => props.isSmaller ? '76px' : '115px'};

  transition: width 1s ease-in-out .5s, height 1s ease-in-out .5s;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: inset 0px 6px 0px 0px rgba(0, 0, 100, 0.2);

  background-color: ${props => props.theme.colors.lightWhite};
`;

const Img = styled.img`
  width: 45%;
  height: auto;
`;

interface RPSLSIconProps {
  option: string;
  isSmaller?: boolean,
  onClick?: (option: string) => void;
}

interface IconSrcAlt {
  iconSrc: string;
  iconAlt: string;
}

/**
 * Rock Paper Scissors Lizard Spock Icon
 *
 * Displays icon chosen with option param.
 * @param option: "Rock", "Paper", "Scissors", "Lizard", or "Spock".
 * @param isSmaller: optional boolean to shrink the size of the icon to 0.6x the size
 * @param onClick: Optional onClick function, sends option param string back so you know what was clicked on.
 */
const RPSLSIcon = ({ option, isSmaller, onClick }: RPSLSIconProps): JSX.Element => {
  const iconOption = option.toLowerCase();

  if (
    iconOption !== "rock" &&
    iconOption !== "paper" &&
    iconOption !== "scissors" &&
    iconOption !== "lizard" &&
    iconOption !== "spock"
  ) {
    throw new Error(
      "RPSLSIcon Error: option invalid. option must be - Rock, Paper, Scissors, Lizard, or Spock."
    );
  }

  function getIconSrcAlt(iconOption: string): IconSrcAlt {
    switch (iconOption) {
      case "rock":
        return {
          iconSrc: "/images/icon-rock.svg",
          iconAlt: "Rock Icon"
        };
      case "paper":
        return {
          iconSrc: "/images/icon-paper.svg",
          iconAlt: "Paper Icon"
        };
      case "scissors":
        return {
          iconSrc: "/images/icon-scissors.svg",
          iconAlt: "Scissors Icon"
        };
      case "lizard":
        return {
          iconSrc: "/images/icon-lizard.svg",
          iconAlt: "Lizard Icon"
        };
      case "spock":
        return {
          iconSrc: "/images/icon-spock.svg",
          iconAlt: "Spock Icon"
        };
      default:
        return {
          iconSrc: "/images/icon-rock.svg",
          iconAlt: "Rock Icon"
        };
    }
  }

  const { iconSrc, iconAlt } = getIconSrcAlt(iconOption);

  return (
    <MainIconContainer
      isSmaller={isSmaller}
      icon={iconOption}
      onClick={() => (onClick ? onClick(option) : null)}
    >
      <IconContainer icon={iconOption}>
        <ImgContainer isSmaller={isSmaller}>
          <Img src={iconSrc} alt={iconAlt} />
        </ImgContainer>
      </IconContainer>
    </MainIconContainer>
  );
};

export default RPSLSIcon;
