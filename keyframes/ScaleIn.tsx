import { keyframes } from "styled-components";

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

export default ScaleIn;