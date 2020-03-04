import styled from 'styled-components';
import ScaleIn from '../keyframes/ScaleIn';

const WinnerContainer = styled.div`
  width: 150px;
  height: 150px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Circle = styled.div<{delay: string}>`
  background-color: ${props => props.theme.colors.lighterWhite};

  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: absolute;

  opacity: 0;

  animation: ${ScaleIn} 5s infinite linear;
  animation-delay: ${props => props.delay};
`;

const WinnersCircle = (): JSX.Element => (
  <WinnerContainer>
    <Circle delay={"0s"}/>
    <Circle delay={".7s"}/>
    <Circle delay={"1.4s"}/>
    <Circle delay={"2.1s"}/>
    <Circle delay={"2.8s"}/>
  </WinnerContainer>
);

export default WinnersCircle;