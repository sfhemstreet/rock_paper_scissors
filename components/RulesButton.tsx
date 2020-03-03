import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;

  border-style: solid;
  border-color: ${props => props.theme.colors.lighterWhite};
  border-width: 1px;
  border-radius: 10px;

  padding: 10px 40px;

  color: ${props => props.theme.colors.lighterWhite};

  letter-spacing: 2px;
  font-size: 14px;

  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 255, 0.4);
  }
`;

interface RulesButtonProps {
  onClick: () => void;
}

const RulesButton = ({ onClick }: RulesButtonProps): JSX.Element => (
  <Button onClick={onClick}>RULES</Button>
);

export default RulesButton;
