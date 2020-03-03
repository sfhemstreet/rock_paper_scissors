import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import RPSLSIcon from "./RPSLSIcon";
import getWindowDimensions from "../utils/getWindowDimensions";
import MasterTheme from "../themes/MasterTheme";
import Positioned from "./Positioned";
import FadeIn from "../keyframes/FadeIn";

const Container = styled.div<{needsExtraPadding: boolean}>`
  animation: ${FadeIn} ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  width: 370px;
  height: 370px;

  margin: ${props => props.needsExtraPadding ? '60px' : '20px'};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
  }
`;

const Img = styled.div<{ isVisible: boolean, isSmaller: boolean }>`
  width: ${props => props.isSmaller ? '260px' : '350px'};
  height: ${props => props.isSmaller ? '260px' : '350px'};

  background-image: url("/images/bg-pentagon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  opacity: ${props => (props.isVisible ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;

const masterPosition = {
  top: MasterTheme.positions.userSelection.top - 40,
  left: MasterTheme.positions.userSelection.left
};

const masterPositionMobile = MasterTheme.positions.userSelectionMobile;

interface RPSLSSelectionPentagonProps {
  onSelection: (selection: string) => void;
}

/**
 * Renders pentagon with selectionable icons for Rock Paper Scissors Lizard and Spock.
 * @param onSelection function called when users selects a option, returns "Rock" "Paper" "Scissors" "Lizard" or "Spock".
 */
const RPSLSSelectionPentagon = ({
  onSelection
}: RPSLSSelectionPentagonProps): JSX.Element => {
  if (typeof window !== "undefined") {
    const { width, height } = getWindowDimensions();
    const isMobile =
      width <
      Number.parseInt(MasterTheme.mediaWidths.shrinkWidth.substring(0, 3));

    const initState = {
      chosenOne: "",
      pentagon: {
        isVisible: true
      },
      paper: {
        pos: {
          top: isMobile ? 105 : 65,
          left: isMobile ? 255 : 280
        },
        isVisible: true
      },
      scissors: {
        pos: {
          top: isMobile ? 5 : -60,
          left: isMobile ? 132.5 : 110
        },
        isVisible: true
      },
      rock: {
        pos: {
          top: isMobile ? 255 : 270,
          left: isMobile ? 210 : 210
        },
        isVisible: true
      },
      lizard: {
        pos: {
          top: isMobile ? 255 : 270,
          left: isMobile ? 55 : 0
        },
        isVisible: true
      },
      spock: {
        pos: {
          top: isMobile ? 105 : 65,
          left: isMobile ? 10 : -60
        },
        isVisible: true
      }
    };

    const [state, setState] = useState(initState);

    const animateExit = (selection: string): void => {
      if (selection === "Paper") {
        setState({
          ...state,
          chosenOne: "Paper",
          pentagon: {
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
            isVisible: false,
            pos: {
              top: initState.rock.pos.top + 100,
              left: initState.rock.pos.left + 100
            }
          },
          paper: {
            isVisible: true,
            pos: isMobile ? masterPositionMobile : masterPosition
          },
          lizard: {
            isVisible: false,
            pos: {
              top: initState.lizard.pos.top + 100,
              left: initState.lizard.pos.left - 100
            }
          },
          spock: {
            isVisible: false,
            pos: {
              top: initState.spock.pos.top - 100,
              left: initState.spock.pos.left - 100
            }
          }
        });
      } else if (selection === "Scissors") {
        setState({
          ...state,
          chosenOne: "Scissors",
          pentagon: {
            isVisible: false
          },
          scissors: {
            isVisible: true,
            pos: isMobile ? masterPositionMobile : masterPosition
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
              left: initState.paper.pos.left + 100
            }
          },
          lizard: {
            isVisible: false,
            pos: {
              top: initState.lizard.pos.top + 100,
              left: initState.lizard.pos.left - 100
            }
          },
          spock: {
            isVisible: false,
            pos: {
              top: initState.spock.pos.top - 100,
              left: initState.spock.pos.left - 100
            }
          }
        });
      } else if (selection === "Rock") {
        setState({
          ...state,
          chosenOne: "Rock",
          pentagon: {
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
            pos: isMobile ? masterPositionMobile : masterPosition
          },
          paper: {
            isVisible: false,
            pos: {
              top: initState.paper.pos.top - 100,
              left: initState.paper.pos.left + 100
            }
          },
          lizard: {
            isVisible: false,
            pos: {
              top: initState.lizard.pos.top + 100,
              left: initState.lizard.pos.left - 100
            }
          },
          spock: {
            isVisible: false,
            pos: {
              top: initState.spock.pos.top - 100,
              left: initState.spock.pos.left - 100
            }
          }
        });
      } else if (selection === "Lizard") {
        setState({
          ...state,
          chosenOne: "Lizard",
          pentagon: {
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
              left: initState.paper.pos.left + 100
            }
          },
          lizard: {
            isVisible: true,
            pos: isMobile ? masterPositionMobile : masterPosition
          },
          spock: {
            isVisible: false,
            pos: {
              top: initState.spock.pos.top - 100,
              left: initState.spock.pos.left - 100
            }
          }
        });
      } else if (selection === "Spock") {
        setState({
          ...state,
          chosenOne: "Spock",
          pentagon: {
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
              left: initState.paper.pos.left + 100
            }
          },
          lizard: {
            isVisible: false,
            pos: {
              top: initState.lizard.pos.top + 100,
              left: initState.lizard.pos.left - 100
            }
          },
          spock: {
            isVisible: true,
            pos: isMobile ? masterPositionMobile : masterPosition
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
      <Container needsExtraPadding={!isMobile}>
        <Img isVisible={state.pentagon.isVisible} isSmaller={isMobile}/>
        <Positioned state={state.paper}>
          <RPSLSIcon
            option={"Paper"}
            onClick={(option: string) => animateExit(option)}
            isSmaller={isMobile && state.chosenOne !== "Paper"}
          />
        </Positioned>
        <Positioned state={state.scissors}>
          <RPSLSIcon
            option={"Scissors"}
            onClick={(option: string) => animateExit(option)}
            isSmaller={isMobile && state.chosenOne !== "Scissors"}
          />
        </Positioned>
        <Positioned state={state.rock}>
          <RPSLSIcon
            option={"Rock"}
            onClick={(option: string) => animateExit(option)}
            isSmaller={isMobile && state.chosenOne !== "Rock"}
          />
        </Positioned>
        <Positioned state={state.lizard}>
          <RPSLSIcon
            option={"Lizard"}
            onClick={(option: string) => animateExit(option)}
            isSmaller={isMobile && state.chosenOne !== "Lizard"}
          />
        </Positioned>
        <Positioned state={state.spock}>
          <RPSLSIcon
            option={"Spock"}
            onClick={(option: string) => animateExit(option)}
            isSmaller={isMobile && state.chosenOne !== "Spock"}
          />
        </Positioned>
      </Container>
    );
  } else {
    return <Container needsExtraPadding={false}></Container>;
  }
};

export default RPSLSSelectionPentagon;
