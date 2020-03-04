import styled, { keyframes } from 'styled-components';

const ScaleIn = keyframes`
  from {
    transform: scale(.5, .5);
    opacity: .15;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
`;

const Container = styled.div`
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
  <Container>
    <Circle delay={"0s"}/>
    <Circle delay={".7s"}/>
    <Circle delay={"1.4s"}/>
    <Circle delay={"2.1s"}/>
    <Circle delay={"2.8s"}/>
  </Container>
);

export default WinnersCircle;