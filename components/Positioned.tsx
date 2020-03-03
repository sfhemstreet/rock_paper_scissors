import styled from 'styled-components';

export interface PositionedIconData {
  pos: {
    top: number;
    left: number;
  };
  isVisible: boolean;
}

const Positioned = styled.div<{ state: PositionedIconData }>`
  position: absolute;

  top: ${props => `${props.state.pos.top}px`};
  left: ${props => `${props.state.pos.left}px`};

  opacity: ${props => (props.state.isVisible ? 1 : 0)};
  filter: grayscale(${props => props.state.isVisible ? 0 : 1});

  transition: all 1s ease-in-out;
`;

export default Positioned;