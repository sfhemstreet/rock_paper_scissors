import styled from "styled-components";
import MasterTheme from "../themes/MasterTheme";
import getWindowDimensions from "../utils/getWindowDimensions";
import RPSLSIcon from "./RPSLSIcon";
import IconShadowPlaceHolder from "./IconShadowPlaceHolder";
import determineWinner from "../utils/determineWinner";
import FadeIn from "../keyframes/FadeIn";
import Center from "./Center";
import WinnersCircle from "./WinnerCircle";

const Container = styled.div`
  width: 370px;
  height: 370px;

  margin: 20px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Positioned = styled.div<{ state: PositionedIconData }>`
  position: absolute;

  top: ${props => `${props.state.pos.top}px`};
  left: ${props => `${props.state.pos.left}px`};

  opacity: ${props => (props.state.isVisible ? 1 : 0)};

  transition: all 1s ease-in-out;
`;

const FadeInPositioned = styled.div<{ state: FadeInPositionedData }>`
  position: absolute;

  top: ${props => `${props.state.pos.top}px`};
  left: ${props => `${props.state.pos.left}px`};

  animation: ${FadeIn} ${props => props.state.curve} ${props => props.state.duration};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

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

interface PositionData {
  top: number;
  left: number;
}

interface PositionedIconData {
  pos: PositionData;
  isVisible: boolean;
}

interface FadeInPositionedData {
  pos: PositionData;
  duration: string;
  curve: string;
}

interface GamePlayResultProps {
  user: string;
  opponent: string;
  onClickPlayAgain: () => void;
}

const GamePlayResult = ({
  user,
  opponent,
  onClickPlayAgain
}: GamePlayResultProps): JSX.Element => {
  if (typeof window !== "undefined") {
    const { width, height } = getWindowDimensions();
    const isMobile =
      width <
      Number.parseInt(MasterTheme.mediaWidths.shrinkWidth.substring(0, 3));

    const winner = determineWinner(user, opponent);

    const userState = {
      pos: isMobile
        ? MasterTheme.positions.userSelectionMobile
        : MasterTheme.positions.userSelection,
      isVisible: true
    };

    const userTextPos: FadeInPositionedData = {
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

    const opponentTextPos: FadeInPositionedData = {
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

    const opponentShadowFadeIn: FadeInPositionedData = {
      pos: isMobile
        ? MasterTheme.positions.opponentSelectionMobile
        : MasterTheme.positions.opponentSelection,
      duration: "0.3s",
      curve: "ease-in"
    };

    const opponentFadeInState: FadeInPositionedData = {
      pos: isMobile
        ? MasterTheme.positions.opponentSelectionMobile
        : MasterTheme.positions.opponentSelection,
      duration: "3s",
      curve: "ease-in"
    };

    const winnerTextState: FadeInPositionedData = {
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

    const playAgainButtonState: FadeInPositionedData = {
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

    const opponentWinnerCircleState: FadeInPositionedData = {
      pos: isMobile
        ? MasterTheme.positions.opponentSelectionMobile
        : MasterTheme.positions.opponentSelection,
      duration: "3s",
      curve: "cubic-bezier(0.695, 0.010, 0.880, -0.055)"
    };

    const userWinnerCircleState: FadeInPositionedData = {
      pos: isMobile
        ? MasterTheme.positions.userSelectionMobile
        : MasterTheme.positions.userSelection,
      duration: "3s",
      curve: "cubic-bezier(0.695, 0.010, 0.880, -0.055)"
    };

    const winnerCircleState: FadeInPositionedData | null =
      winner === "Tie"
        ? null
        : winner === "User"
        ? userWinnerCircleState
        : opponentWinnerCircleState;

    return (
      <Container>
        <FadeInPositioned state={userTextPos}>
          <Text>YOU PICKED</Text>
        </FadeInPositioned>
        <FadeInPositioned state={opponentTextPos}>
          <Text>OPPONENT PICKED</Text>
        </FadeInPositioned>
        <FadeInPositioned state={opponentShadowFadeIn}>
          <IconShadowPlaceHolder />
        </FadeInPositioned>
        {winnerCircleState && <FadeInPositioned state={winnerCircleState}>
          <WinnersCircle />
        </FadeInPositioned>}
        <Positioned state={userState}>
          <RPSLSIcon option={user} />
        </Positioned>
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
      </Container>
    );
  } else {
    return <Container></Container>;
  }
};

export default GamePlayResult;
