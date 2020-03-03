import styled, { keyframes } from "styled-components";
import MasterTheme from "../themes/MasterTheme";
import getWindowDimensions from "../utils/getWindowDimensions";

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${FadeIn} ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 10;

  position: fixed;

  top: 0;
  left: 0;

  display: flex;

  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div<{isMobile: boolean}>`
  background-color: #fefefe;
  border-radius: 10px;

  width: ${props => props.isMobile ? '100%' : '450px'};
  height: ${props => props.isMobile ? '100%' : 'auto'};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  filter: grayscale(1);
`;

const Row = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props => props.isMobile ? 'center' : 'space-between'};
  align-items: center;

  margin-top: 0;

  padding: ${props => props.isMobile ? '20px' : '0px 20px'};
`;

const Text = styled.p`
  margin: 0;

  color: ${props => props.theme.colors.darkText};
  font-size: 30px;
`;

const CloseButton = styled.div`
  color: #aaa;
  font-size: 60px;

  cursor: pointer;

  :hover {
    color: black;
  }
`;

const Img = styled.img`
  margin-top: 20px;
  margin-bottom: 40px;
`;

interface RulesModalProps {
  isLizardSpockMode: boolean;
  onClickClose: () => void;
}

const RulesModal = ({
  isLizardSpockMode,
  onClickClose
}: RulesModalProps): JSX.Element => {
  if (typeof window !== "undefined") {
    const { width, height } = getWindowDimensions();
    const isMobile = width < Number.parseInt(MasterTheme.mediaWidths.shrinkWidth.substring(0, 3));
  
    return (
      <Container>
        <ContentContainer isMobile={isMobile}>
          <Row isMobile={isMobile}>
            <Text>RULES</Text>
            {!isMobile && (
              <CloseButton onClick={onClickClose}>&times;</CloseButton>
            )}
          </Row>
          {isLizardSpockMode ? (
            <Content>
              <Img
                src="/images/image-rules-bonus.svg"
                alt="Rock beats Scissors and Lizard, Paper beats Rock and Spock, Scissors beats Paper and Lizard, Lizard beats Spock and Paper, Spock beats Rock and Scissors."
              />
            </Content>
          ) : (
            <Content>
              <Img
                src="/images/image-rules.svg"
                alt="Rock beats Scissors, Scissors beats Paper, and Paper beats Rock."
              />
            </Content>
          )}
          {isMobile && (
            <Row isMobile={isMobile}>
              <CloseButton onClick={onClickClose}>&times;</CloseButton>
            </Row>
          )}
        </ContentContainer>
      </Container>
    );
  } else {
    return <Container onClick={onClickClose}></Container>;
  }
};

export default RulesModal;
