import styled from "styled-components";
import colors from "../../data/colors";

export const NavigationContainer = styled.div`
  height: 64px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 900px) {
    height: 46px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 0.1s ease;
  @media (min-width: 900px) {
    &:hover {
      transform: scale(1.4);
    }
  }
`;

export const FirstStyledIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

export const CenteredContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0px;

  @media (max-width: 899px) {
    justify-content: center;
  }

  @media (min-width: 900px) {
    justify-content: flex-start;
  }

  img.logo,
  .epicure-title {
    pointer-events: none;
    padding: 0px;
  }

  .epicure-title {
    margin-left: 1px;
    font-family: Helvetica Neue;
    font-size: 27px;
    font-weight: 200;
    line-height: 32.64px;
    letter-spacing: 1.350000023841858px;
    text-align: left;
    display: none;

    @media (min-width: 900px) {
      display: block;
      margin-left: 32px;
    }
  }
`;

export const MenuOption = styled.div`
  margin-left: 32px;
  cursor: pointer;
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 21.76px;
  letter-spacing: 1.919px;
  text-align: left;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 899px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  background-color: ${colors.white};
  z-index: 100;
  //border: 5px solid saddlebrown;
`;

export const DropdownMenu = styled.div`
  width: 100%;
  height: 287px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  //border: 5px solid saddlebrown;
`;

export const DropdownItem = styled.div`
  font-family: Helvetica Neue;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 200;
  line-height: 21.76px;
  letter-spacing: 1.9199999570846558px;
  text-align: left;
  width: 100%;
  &:hover {
    background-color: ${colors.middleGray};
  }
`;

export const DropdownSeparator = styled.hr`
  width: 90%;
  height: 1px;
  background-color: ${colors.middleGray};
  margin: 20px 0;
`;
