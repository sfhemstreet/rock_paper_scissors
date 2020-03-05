import React, { useState } from "react";
import styled from "styled-components";
import RPSLSIcon from "./RPSLSIcon";
import MasterTheme from "../themes/MasterTheme";
import {Positioned} from "./Positioned";

const PentagonImg = styled.div<{ isVisible: boolean; isSmaller: boolean }>`
  width: ${props => (props.isSmaller ? "260px" : "350px")};
  height: ${props => (props.isSmaller ? "260px" : "350px")};

  background-image: url("/images/bg-pentagon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  opacity: ${props => (props.isVisible ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;

interface RPSLSSelectionPentagonProps {
  isMobile: boolean;
  onSelection: (selection: string) => void;
}

/**
 * Renders pentagon with selectionable icons for Rock Paper Scissors Lizard and Spock.
 * @param isMobile boolean, set to true for smaller displays
 * @param onSelection function called when users selects a option, returns "Rock" "Paper" "Scissors" "Lizard" or "Spock".
 */
const RPSLSSelectionPentagon = ({
  isMobile,
  onSelection
}: RPSLSSelectionPentagonProps): JSX.Element => {
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
  
  // displayAll keeps track of what is rendered onto the screen. 
  // After a user picks an option and the animateExit completes, 
  // we want everything else to be removed.
  const [displayAll, setDisplayAll] = useState(true);

  // Sets new positions for each element, based on what the user picks.
  // Whatever the user picks goes into the userSelection position.
  // Everything the user didn't pick has isVisible set to false.
  const animateExit = (selection: string): void => {
    // If user clicks on an icon after already selecting one do nothing.
    if(displayAll === false){
      return;
    }
    // Check what the user selected and animate accordingly. 
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
          pos: isMobile ? MasterTheme.positions.userSelectionMobile : MasterTheme.positions.userSelection
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
          pos: isMobile ? MasterTheme.positions.userSelectionMobile : MasterTheme.positions.userSelection
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
          pos: isMobile ? MasterTheme.positions.userSelectionMobile : MasterTheme.positions.userSelection
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
          pos: isMobile ? MasterTheme.positions.userSelectionMobile : MasterTheme.positions.userSelection
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
          pos: isMobile ? MasterTheme.positions.userSelectionMobile : MasterTheme.positions.userSelection
        }
      });
    } else {
      throw new Error("Ummmm user selected nonexistent icon");
    }

    // We need to wait for the animation to complete before
    // removing everything (other than the user selected option)
    // and calling the onSelection function. 
    setTimeout(function() {
      setDisplayAll(false);
      onSelection(selection);
    }, 1500);
  };

  // Each of the displayAll statements makes sure we only display what is needed.
  // After a user selects an option and the animateExit function completes, 
  // we only want to have the  user selected Icon to be rendered. 
  return (
    <>
      {displayAll && (
      <PentagonImg isVisible={state.pentagon.isVisible} isSmaller={isMobile} />)}

      {(displayAll || state.chosenOne === "Paper") && (
      <Positioned state={state.paper}>
        <RPSLSIcon
          option={"Paper"}
          onClick={(option: string) => animateExit(option)}
          isSmaller={isMobile && state.chosenOne !== "Paper"}
        />
      </Positioned>)}

      {(displayAll || state.chosenOne === "Scissors") && (
      <Positioned state={state.scissors}>
        <RPSLSIcon
          option={"Scissors"}
          onClick={(option: string) => animateExit(option)}
          isSmaller={isMobile && state.chosenOne !== "Scissors"}
        />
      </Positioned>)}

      {(displayAll || state.chosenOne === "Rock") && (
      <Positioned state={state.rock}>
        <RPSLSIcon
          option={"Rock"}
          onClick={(option: string) => animateExit(option)}
          isSmaller={isMobile && state.chosenOne !== "Rock"}
        />
      </Positioned>)}

      {(displayAll || state.chosenOne === "Lizard") && (
      <Positioned state={state.lizard}>
        <RPSLSIcon
          option={"Lizard"}
          onClick={(option: string) => animateExit(option)}
          isSmaller={isMobile && state.chosenOne !== "Lizard"}
        />
      </Positioned>)}

      {(displayAll || state.chosenOne === "Spock") && (
      <Positioned state={state.spock}>
        <RPSLSIcon
          option={"Spock"}
          onClick={(option: string) => animateExit(option)}
          isSmaller={isMobile && state.chosenOne !== "Spock"}
        />
      </Positioned>)}
    </>
  );
};

export default RPSLSSelectionPentagon;
