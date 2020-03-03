import styled from "styled-components";

/**
 * BackGround
 * default background
*/
const BackGround = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${props => props.theme.gradients.background};

  position: relative;
`;

export default BackGround;
