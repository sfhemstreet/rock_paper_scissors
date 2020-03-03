import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.lightWhite};
  width: 150px;
  height: 100px;

  border-style: solid;
  border-color: ${props => props.theme.colors.lightWhite};
  border-width: 1px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: ${props => props.theme.fonts.bigWeight};
  font-size: 40px;

  color: ${props => props.theme.colors.darkText};

  cursor: pointer;

  transition: all 0.3s ease-in-out;

  :hover {
    background-color: white;
  }

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    width: 100px;
    height: 66px;

    font-size: 30px;
  }
`;

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton = ({ onClick }: PlayButtonProps): JSX.Element => (
  <Button onClick={onClick}>Play</Button>
);

export default PlayButton;
