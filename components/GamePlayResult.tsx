import styled from "styled-components";
import MasterTheme from "../themes/MasterTheme";
import RPSLSIcon from "./RPSLSIcon";
import IconShadowPlaceHolder from "./IconShadowPlaceHolder";
import determineWinner from "../utils/determineWinner";
import Center from "./Center";
import WinnersCircle from "./WinnerCircle";
import { FadeInPositioned, FadeInPositionedProps } from "./Positioned";

const Text = styled.p`
  font-weight: ${props => props.theme.fonts.normalWeight};
  font-size: 20px;
  text-align: center;

  width: 150px;

  color: ${props => props.theme.colors.lighterWhite};

  margin: 0;
`;

const BigText = styled.p`
  font-weight: ${props => props.theme.fonts.bigWeight};
  font-size: 50px;
  text-align: center;

  width: 200px;

  color: ${props => props.theme.colors.lighterWhite};

  margin: 0;
`;

const PlayAgainButton = styled.button<{ isMobile: boolean }>`
  width: ${props => (props.isMobile ? "300px" : "150")};
  height: 50px;

  border-radius: 10px;

  font-size: 22px;
  letter-spacing: 2px;

  background-color: ${props => props.theme.colors.lightWhite};
  color: ${props => props.theme.colors.darkText};

  cursor: pointer;

  transition: all ease-in-out 0.5s;

  :hover {
    background-color: #fff;
  }
`;

interface GamePlayResultProps {
  isMobile: boolean;
  user: string;
  opponent: string;
  onClickPlayAgain: () => void;
}

const GamePlayResult = ({
  isMobile,
  user,
  opponent,
  onClickPlayAgain
}: GamePlayResultProps): JSX.Element => {
  const winner: string = determineWinner(user, opponent);

  const userTextPos: FadeInPositionedProps = {
    pos: {
      top:
        (isMobile
          ? MasterTheme.positions.userSelectionMobile.top
          : MasterTheme.positions.userSelection.top) - 30,
      left: isMobile
        ? MasterTheme.positions.userSelectionMobile.left
        : MasterTheme.positions.userSelection.left
    },
    duration: "0.5s",
    curve: "ease-in"
  };

  const opponentTextPos: FadeInPositionedProps = {
    pos: {
      top:
        (isMobile
          ? MasterTheme.positions.opponentSelectionMobile.top
          : MasterTheme.positions.opponentSelection.top) - 30,
      left: isMobile
        ? MasterTheme.positions.opponentSelectionMobile.left
        : MasterTheme.positions.opponentSelection.left
    },
    duration: "0.5s",
    curve: "ease-in"
  };

  const opponentShadowFadeIn: FadeInPositionedProps = {
    pos: isMobile
      ? MasterTheme.positions.opponentSelectionMobile
      : MasterTheme.positions.opponentSelection,
    duration: "0.3s",
    curve: "ease-in"
  };

  const opponentFadeInState: FadeInPositionedProps = {
    pos: isMobile
      ? MasterTheme.positions.opponentSelectionMobile
      : MasterTheme.positions.opponentSelection,
    duration: "3s",
    curve: "ease-in"
  };

  const winnerTextState: FadeInPositionedProps = {
    pos: {
      top:
        (isMobile
          ? MasterTheme.positions.userSelectionMobile.top
          : MasterTheme.positions.userSelection.top) + (isMobile ? 170 : 20),
      left:
        (isMobile
          ? MasterTheme.positions.userSelectionMobile.left
          : MasterTheme.positions.userSelection.left) + (isMobile ? 70 : 170)
    },
    duration: "3.5s",
    curve: "cubic-bezier(0.695, 0.010, 0.880, -0.055)"
  };

  const playAgainButtonState: FadeInPositionedProps = {
    pos: {
      top:
        (isMobile
          ? MasterTheme.positions.userSelectionMobile.top
          : MasterTheme.positions.userSelection.top) + (isMobile ? 230 : 80),
      left:
        (isMobile
          ? MasterTheme.positions.userSelectionMobile.left
          : MasterTheme.positions.userSelection.left) + (isMobile ? 20 : 200)
    },
    duration: "3.5s",
    curve: "cubic-bezier(0.695, 0.010, 0.880, -0.055)"
  };

  const opponentWinnerCircleState: FadeInPositionedProps = {
    pos: isMobile
      ? MasterTheme.positions.opponentSelectionMobile
      : MasterTheme.positions.opponentSelection,
    duration: "4s",
    curve: "ease-in",
    zIndex: -1
  };

  const userWinnerCircleState: FadeInPositionedProps = {
    pos: isMobile
      ? MasterTheme.positions.userSelectionMobile
      : MasterTheme.positions.userSelection,
    duration: "4s",
    curve: "ease-in",
    zIndex: -1
  };

  const winnerCircleState: FadeInPositionedProps | null =
    winner === "Tie"
      ? null
      : winner === "User"
      ? userWinnerCircleState
      : opponentWinnerCircleState;

  return (
    <>
      <FadeInPositioned state={userTextPos}>
        <Text>YOU PICKED</Text>
      </FadeInPositioned>
      <FadeInPositioned state={opponentTextPos}>
        <Text>OPPONENT PICKED</Text>
      </FadeInPositioned>
      <FadeInPositioned state={opponentShadowFadeIn}>
        <IconShadowPlaceHolder />
      </FadeInPositioned>
      {winnerCircleState && (
        <FadeInPositioned state={winnerCircleState}>
          <WinnersCircle />
        </FadeInPositioned>
      )}
      <FadeInPositioned state={opponentFadeInState}>
        <RPSLSIcon option={opponent} />
      </FadeInPositioned>
      <FadeInPositioned state={winnerTextState}>
        <Center>
          {winner === "Tie" && <BigText>TIE</BigText>}
          {winner === "User" && <BigText>YOU WIN</BigText>}
          {winner === "Opponent" && <BigText>YOU LOSE</BigText>}
        </Center>
      </FadeInPositioned>
      <FadeInPositioned state={playAgainButtonState}>
        <PlayAgainButton isMobile={isMobile} onClick={onClickPlayAgain}>
          Play Again
        </PlayAgainButton>
      </FadeInPositioned>
    </>
  );
};

export default GamePlayResult;
