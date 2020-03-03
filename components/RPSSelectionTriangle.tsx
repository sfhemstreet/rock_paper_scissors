import React, { useState } from "react";
import styled from "styled-components";
import RPSLSIcon from "./RPSLSIcon";
import getWindowDimensions from "../utils/getWindowDimensions";
import MasterTheme from "../themes/MasterTheme";
import FadeIn from "../keyframes/FadeIn";
import Positioned from "./Positioned";


const Container = styled.div`
  animation: ${FadeIn} ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  width: 370px;
  height: 370px;

  margin: 20px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div<{ isVisible: boolean }>`
  width: 250px;
  height: 250px;

  background-image: url("/images/bg-triangle.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  opacity: ${props => (props.isVisible ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;


interface RPSSelectionTriangleProps {
  onSelection: (selection: string) => void;
}

const initState = {
  triangle: {
    isVisible: true
  },
  paper: {
    pos: {
      top: 0,
      left: 10
    },
    isVisible: true
  },
  scissors: {
    pos: {
      top: 0,
      left: 208
    },
    isVisible: true
  },
  rock: {
    pos: {
      top: 170,
      left: 109
    },
    isVisible: true
  }
};


/**
 * Renders triangle with selectionable icons for Rock Paper or Scissors
 * @param onSelection function called when users selects a option, returns "Rock" "Paper" or "Scissors"
 */
const RPSSelectionTriangle = ({
  onSelection
}: RPSSelectionTriangleProps): JSX.Element => {
  if (typeof window !== "undefined") {
    const [state, setState] = useState(initState);
    const { width, height } = getWindowDimensions();
    const isMobile =
      width <
      Number.parseInt(MasterTheme.mediaWidths.shrinkWidth.substring(0, 3));

    const animateExit = (selection: string): void => {
      if (selection === "Paper") {
        setState({
          ...state,
          triangle: {
            isVisible: false
          },
          scissors: {
            isVisible: false,
            pos: {
              top: initState.scissors.pos.top + 100,
              left: initState.scissors.pos.left + 100
            }
          },
          rock: {
            isVisible: false,
            pos: {
              top: initState.rock.pos.top + 100,
              left: initState.rock.pos.left + 100
            }
          },
          paper: {
            isVisible: true,
            pos: isMobile ? MasterTheme.positions.userSelectionMobile : MasterTheme.positions.userSelection,
          }
        });
      } else if (selection === "Scissors") {
        setState({
          ...state,
          triangle: {
            isVisible: false
          },
          scissors: {
            isVisible: true,
            pos: isMobile ? MasterTheme.positions.userSelectionMobile : MasterTheme.positions.userSelection,
          },
          rock: {
            isVisible: false,
            pos: {
              top: initState.rock.pos.top + 100,
              left: initState.rock.pos.left + 100
            }
          },
          paper: {
            isVisible: false,
            pos: {
              top: initState.paper.pos.top - 100,
              left: initState.paper.pos.left - 100
            }
          }
        });
      } else if (selection === "Rock") {
        setState({
          ...state,
          triangle: {
            isVisible: false
          },
          scissors: {
            isVisible: false,
            pos: {
              top: initState.scissors.pos.top - 100,
              left: initState.scissors.pos.left + 100 
            }
          },
          rock: {
            isVisible: true,
            pos: isMobile ? MasterTheme.positions.userSelectionMobile : MasterTheme.positions.userSelection,
          },
          paper: {
            isVisible: false,
            pos: {
              top: initState.paper.pos.top - 100,
              left: initState.paper.pos.left - 100
            }
          }
        });
      } else {
        throw new Error("Ummmm user selected nonexistent icon");
      }

      setTimeout(function() {
        onSelection(selection);
      }, 1500);
    };

    return (
      <Container>
        <Img isVisible={state.triangle.isVisible} />
        <Positioned state={state.paper}>
          <RPSLSIcon
            option={"Paper"}
            onClick={(option: string) => animateExit(option)}
          />
        </Positioned>
        <Positioned state={state.scissors}>
          <RPSLSIcon
            option={"Scissors"}
            onClick={(option: string) => animateExit(option)}
          />
        </Positioned>
        <Positioned state={state.rock}>
          <RPSLSIcon
            option={"Rock"}
            onClick={(option: string) => animateExit(option)}
          />
        </Positioned>
      </Container>
    );
  } else {
    return <Container></Container>;
  }
};

export default RPSSelectionTriangle;
