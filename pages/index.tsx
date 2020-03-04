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
import determineWinner from "../utils/determineWinner";
import Center from "../components/Center";
import getWindowDimensions from "../utils/getWindowDimensions";
import MasterTheme from "../themes/MasterTheme";
import getRandomRPSLS from "../utils/getRandomRPSLS";
import RPSSelectionTriangle from "../components/RPSSelectionTriangle";
import RPSLSSelectionPentagon from "../components/RPSLSSelectionPentagon";
import FadeIn from "../keyframes/FadeIn";
import GamePlayResult from "../components/GamePlayResult";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 680px;

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    min-height: 535px;
  }
`;

const PlayContainer = styled.div<{ needsExtraPadding: boolean }>`
  animation: ${FadeIn} ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  width: 370px;
  height: 370px;

  margin: ${props => (props.needsExtraPadding ? "60px" : "20px")};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
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
  gameStage: -1,
  score: 0,
  userSelection: "",
  opponentSelection: "",
  isRulesModalOpen: false
};

function Play(): JSX.Element {
  const [state, setState] = useState(initGameState);

  const onUserSelection = (userSelection: string): void => {
    const opponentSelection = getRandomRPSLS(state.isLizardSpockMode);
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

  const onPlayAgain = () => {
    setState({
      ...state,
      gameStage: 0
    });

    setTimeout(() => {
      setState({
        ...state,
        userSelection: "",
        opponentSelection: "",
        gameStage: 1
      });
    }, 100);
  };

  const onGoToHomeScreen = () => {
    setState({
      ...initGameState,
      isLizardSpockMode: state.isLizardSpockMode,
      score: state.score
    });
  };

  if (typeof window !== "undefined") {
    const { width } = getWindowDimensions();
    const isMobile =
      width <
      Number.parseInt(MasterTheme.mediaWidths.shrinkWidth.substring(0, 3));

    return (
      <BackGround>
        <MainContainer>
          {/* Logo and Score Area: if not in play only shows logo, when playing LogoScoreBox */}
          <Pad20>
            <Center>
              <LogoScoreBox>
                <Logo
                  isLizardSpockMode={state.isLizardSpockMode}
                  onClick={onGoToHomeScreen}
                />
                <ScoreCard>{state.score}</ScoreCard>
              </LogoScoreBox>
            </Center>
          </Pad20>

          {/* Start Screen: displays game mode option selection and Play button.  */}
          {state.gameStage === -1 && (
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
          {state.gameStage > 0 && (
          <PlayContainer
            needsExtraPadding={!isMobile && state.isLizardSpockMode}
          >
            {/* Stage 1 of 2 Game Play: displays "rock" "paper" etc */}
            {state.gameStage >= 1 && (
              <>
                {state.isLizardSpockMode ? (
                  <RPSLSSelectionPentagon
                    isMobile={isMobile}
                    onSelection={(userSelection: string) =>
                      onUserSelection(userSelection)
                    }
                  />
                ) : (
                  <RPSSelectionTriangle
                    isMobile={isMobile}
                    onSelection={(userSelection: string) =>
                      onUserSelection(userSelection)
                    }
                  />
                )}
              </>
            )}
            {/* Stage 2 of 2 Game Play: displays what user picked and what 
            opponent picked and tells who winner is, along with play again button. */}
            {state.gameStage === 2 && (
              <GamePlayResult
                isMobile={isMobile}
                user={state.userSelection}
                opponent={state.opponentSelection}
                onClickPlayAgain={onPlayAgain}
              />
            )}
          </PlayContainer>)}
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
  } else {
    return <BackGround>
      
    </BackGround>;
  }
}

export default Play;
