import styled from 'styled-components';
import FadeIn from '../keyframes/FadeIn';

export interface PositionedProps {
  pos: {
    top: number;
    left: number;
  };
  isVisible: boolean;
}

export const Positioned = styled.div<{ state: PositionedProps }>`
  position: absolute;

  top: ${props => `${props.state.pos.top}px`};
  left: ${props => `${props.state.pos.left}px`};

  opacity: ${props => (props.state.isVisible ? 1 : 0)};
  filter: grayscale(${props => props.state.isVisible ? 0 : 1});
  pointer-events: ${props => props.state.isVisible ? 'auto' : 'none'};

  transition: all 1s ease-in-out;
`;

export interface FadeInPositionedProps {
  pos: {
    top: number;
    left: number;
  }
  duration: string;
  curve: string;
  zIndex?: number;
}

// Positioned Element that Fades in with given params
export const FadeInPositioned = styled.div<{ state: FadeInPositionedProps }>`
  position: absolute;

  top: ${props => `${props.state.pos.top}px`};
  left: ${props => `${props.state.pos.left}px`};

  animation: ${FadeIn} ${props => props.state.curve} ${props => props.state.duration};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  z-index: ${props => props.state.zIndex ? props.state.zIndex : 'auto'};
`;
