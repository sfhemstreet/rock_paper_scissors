import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import BackGround from "../components/BackGround";
import ScoreCard from "../components/ScoreCard";
import LogoScoreBox from "../components/LogoScoreBox";
import Logo from "../components/Logo";
import RulesButton from "../components/RulesButton";
import PlayButton from "../components/PlayButton";
import SelectGameMode from "../components/SelectGameMode";
import RulesModal from "../components/RulesModal";
import RPSLSSelectionPentagon from "../components/RPSLSSelectionPentagon";
import RPSSelectionTriangle from "../components/RPSSelectionTriangle";
import GamePlayResult from "../components/GamePlayResult";
import determineWinner from "../utils/determineWinner";
import Center from "../components/Center";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 680px;

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    min-height: 600px;
  }
`;

const Pad20 = styled.div`
  padding: 20px;
`;

const Text = styled.p`
  font-weight: ${props => props.theme.fonts.normalWeight};
  font-size: 25px;

  color: ${props => props.theme.colors.lighterWhite};

  margin: 0;

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    font-size: 20px;
  }
`;

const RulesButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    padding-right: 0px;
    justify-content: center;
  }
`;

const initGameState = {
  isLizardSpockMode: false,
  gameStage: 0,
  score: 0,
  userSelection: "",
  opponentSelection: "",
  isRulesModalOpen: false
};

function Play(): JSX.Element {
  const [state, setState] = useState(initGameState);

  const onUserSelection = (userSelection: string): void => {
    const opponentSelection = getRandomOption();
    const winner = determineWinner(userSelection, opponentSelection);
    const point = winner === "Tie" ? 0 : winner === "User" ? 1 : -1;
    setState({
      ...state,
      userSelection: userSelection,
      opponentSelection: opponentSelection,
      score: state.score + point,
      gameStage: 2
    });
  };

  const getRandomOption = (): string => {
    const max = state.isLizardSpockMode ? 5 : 3;
    const min = 1;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    switch (random) {
      case 1:
        return "Rock";
      case 2:
        return "Paper";
      case 3:
        return "Scissors";
      case 4:
        return "Lizard";
      case 5:
        return "Spock";
      default:
        throw new Error("Computer picked impossible option...");
    }
  };

  const onPlayAgain = () => {
    setState({
      ...state,
      userSelection: "",
      opponentSelection: "",
      gameStage: 1
    });
  };

  const onResetGame = () => {
    setState(initGameState);
  };

  return (
    <BackGround>
      <MainContainer>
        {/* Logo and Score Area: if not in play only shows logo, when play inits animates to LogoScoreBox */}
        <Pad20>
          <Center>
            {state.gameStage > 0 ? (
              <LogoScoreBox>
                <Logo
                  isLizardSpockMode={state.isLizardSpockMode}
                  onClick={onResetGame}
                />
                <ScoreCard>{state.score}</ScoreCard>
              </LogoScoreBox>
            ) : (
              <Pad20>
                <Logo isLizardSpockMode={state.isLizardSpockMode} />
              </Pad20>
            )}
          </Center>
        </Pad20>

        {/* Start Screen: displays game mode option selection and Play button.  */}
        {state.gameStage === 0 && (
          <>
            <Pad20>
              <Center>
                <Text>Game Mode</Text>
              </Center>
              <Pad20>
                <Center>
                  <SelectGameMode
                    isLizardSpockMode={state.isLizardSpockMode}
                    onSelection={(isLizardSpockMode: boolean) =>
                      setState({
                        ...state,
                        isLizardSpockMode: isLizardSpockMode
                      })
                    }
                  />
                </Center>
              </Pad20>
            </Pad20>
            <Pad20>
              <Center>
                <PlayButton
                  onClick={() => setState({ ...state, gameStage: 1 })}
                />
              </Center>
            </Pad20>
          </>
        )}

        {/* Stage 1 of 2 Game Play: displays "rock" "paper" etc */}
        {state.gameStage === 1 && (
          <Center>
            {state.isLizardSpockMode ? (
              <RPSLSSelectionPentagon
                onSelection={(userSelection: string) =>
                  onUserSelection(userSelection)
                }
              />
            ) : (
              <RPSSelectionTriangle
                onSelection={(userSelection: string) =>
                  onUserSelection(userSelection)
                }
              />
            )}
          </Center>
        )}

        {/* Stage 2 of 2 Game Play: displays what user picked and what 
        opponent picked and tells who winner is, along with play again button. */}
        {state.gameStage === 2 && (
          <Center>
            <GamePlayResult
              user={state.userSelection}
              opponent={state.opponentSelection}
              onClickPlayAgain={onPlayAgain}
            />
          </Center>
        )}
      </MainContainer>
      <RulesButtonContainer>
        <RulesButton
          onClick={() => setState({ ...state, isRulesModalOpen: true })}
        />
      </RulesButtonContainer>
      {state.isRulesModalOpen && (
        <RulesModal
          isLizardSpockMode={state.isLizardSpockMode}
          onClickClose={() => setState({ ...state, isRulesModalOpen: false })}
        />
      )}
    </BackGround>
  );
}

export default Play;
