import styled from "styled-components";

const Container = styled.div`
  position: relative;

  background: transparent;
  width: 300px;
  height: 100px;

  border-style: solid;
  border-color: ${props => props.theme.colors.lighterWhite};
  border-width: 1px;
  border-radius: 10px;

  display: flex;
  flex-wrap: nowrap;

  z-index: 2;

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    width: 200px;
    height: 66px;
  }
`;

const ColorBox = styled.div<{ isOnRightItem: boolean }>`
  position: absolute;
  left: ${props => (props.isOnRightItem ? "150px" : "0px")};

  background-color: ${props =>
    props.isOnRightItem ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 255, 0, 0.4)"};

  width: 150px;
  height: 100px;

  border-radius: ${props =>
    props.isOnRightItem ? "0px 10px 10px 0px" : "10px 0px 0px 10px"};

  z-index: 1;

  transition: all 0.5s ease-in-out;

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    width: 100px;
    height: 66px;

    left: ${props => (props.isOnRightItem ? "100px" : "0px")};
  }
`;

const Item = styled.div`
  cursor: pointer;

  width: 150px;
  height: 100px;

  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    width: 100px;
    height: 66px;
  }
`;

const Text = styled.p`
  margin: 0;

  font-weight: ${props => props.theme.fonts.bigWeight};
  font-size: 30px;

  z-index: 2;

  text-align: center;

  color: ${props => props.theme.colors.lightWhite};

  @media screen and (max-width: ${props =>
      props.theme.mediaWidths.shrinkWidth}) {
    font-size: 22px;
  }
`;

interface SelectGameModeProps {
  isLizardSpockMode: boolean;
  onSelection: (isLizardSpockMode: boolean) => void;
}

const SelectGameMode = ({
  isLizardSpockMode,
  onSelection
}: SelectGameModeProps): JSX.Element => {
  return (
    <Container>
      <Item onClick={() => onSelection(false)}>
        <Text>Normal</Text>
      </Item>
      <Item onClick={() => onSelection(true)}>
        <Text>Bonus</Text>
      </Item>
      <ColorBox isOnRightItem={isLizardSpockMode} />
    </Container>
  );
};

export default SelectGameMode;
