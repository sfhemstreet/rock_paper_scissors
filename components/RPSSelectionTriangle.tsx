import React, { useState } from "react";
import styled from "styled-components";
import RPSLSIcon from "./RPSLSIcon";
import MasterTheme from "../themes/MasterTheme";
import { Positioned } from "./Positioned";

const TriangleImg = styled.div<{ isVisible: boolean }>`
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
  isMobile: boolean;
  onSelection: (selection: string) => void;
}

/**
 * Renders triangle with selectionable icons for Rock Paper or Scissors
 * @param isMobile boolean, set to true for smaller displays
 * @param onSelection function called when users selects a option, returns "Rock" "Paper" or "Scissors"
 */
const RPSSelectionTriangle = ({
  isMobile,
  onSelection
}: RPSSelectionTriangleProps): JSX.Element => {
  const initState = {
    chosenOne: "",
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
    if (selection === "Paper") {
      setState({
        ...state,
        chosenOne: "Paper",
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
          pos: isMobile
            ? MasterTheme.positions.userSelectionMobile
            : MasterTheme.positions.userSelection
        }
      });
    } else if (selection === "Scissors") {
      setState({
        ...state,
        chosenOne: "Scissors",
        triangle: {
          isVisible: false
        },
        scissors: {
          isVisible: true,
          pos: isMobile
            ? MasterTheme.positions.userSelectionMobile
            : MasterTheme.positions.userSelection
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
        chosenOne: "Rock",
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
          pos: isMobile
            ? MasterTheme.positions.userSelectionMobile
            : MasterTheme.positions.userSelection
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
      <TriangleImg isVisible={state.triangle.isVisible} />)}
      {(displayAll || state.chosenOne === "Paper") && (
      <Positioned state={state.paper}>
        <RPSLSIcon
          option={"Paper"}
          onClick={(option: string) => animateExit(option)}
        />
      </Positioned>)}
      {(displayAll || state.chosenOne === "Scissors") && (
      <Positioned state={state.scissors}>
        <RPSLSIcon
          option={"Scissors"}
          onClick={(option: string) => animateExit(option)}
        />
      </Positioned>)}
      {(displayAll || state.chosenOne === "Rock") && (
      <Positioned state={state.rock}>
        <RPSLSIcon
          option={"Rock"}
          onClick={(option: string) => animateExit(option)}
        />
      </Positioned>)}
    </>
  );
};

export default RPSSelectionTriangle;
