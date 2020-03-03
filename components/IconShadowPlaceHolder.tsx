import React from "react";
import styled from "styled-components";

const Shadow = styled.div`
  width: 150px;
  height: 150px;

  border-radius: 50%;

  background-color: rgba(0, 0, 0, 0.5);
`;

/**
 * Shadow the same size the RPSLSIcon
 */
const IconShadowPlaceHolder = (): JSX.Element => <Shadow />;

export default IconShadowPlaceHolder;
