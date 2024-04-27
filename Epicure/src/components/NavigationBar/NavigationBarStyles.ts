import styled from "styled-components";
import colors from "../../data/colors";

export const NavigationContainer = styled.div`
  height: 64px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-bottom: 23px;
  padding-left: 127px;
  padding-right: 127px;
  //border: 5px solid darkblue;
  @media (max-width: 900px) {
    height: 46px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 23px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  align-items: center;
  //border: 5px solid saddlebrown;
  @media (max-width: 900px) {
    gap: 8px;
  }
`;

export const StyledIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 20px;
  //justify-content: center;
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
  //border: 5px solid firebrick;

  @media (max-width: 899px) {
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
  //gap: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  //border: 5px solid saddlebrown;
`;

export const DropdownItem = styled.div`
  font-family: Helvetica Neue;
  padding: 8px 20px;
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

export const SearchToggle = styled.div`
  position: absolute;
  top: 205px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 413px;
  background-color: ${colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 20px;

  //border: 5px solid rebeccapurple;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  align-self: flex-start;
  border: 1px;
  background: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 200;
  line-height: 21.76px;
  z-index: 100;
`;
export const OrderIconContainer = styled.div`
  position: absolute;
  //position: fixed;
  top: 45px;
  left: 0%;
  width: 100%;
  height: 218px;
  background-color: ${colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  justify-content: center;
  gap: 20px;
  align-items: center;
  //border: 5px solid darkblue;
  /* @media (min-width: 900px) {
    top: 60px;
  } */
  @media (min-width: 1400px) {
    //margin-left: 1023px;
    //justify-content: end;
    //position: fixed;
    //padding-right: 0px;
    top: 60px;
    width: 497px;
    height: 586px;
    //position: sticky;
    gap: 38px;
    left: auto;
    right: 0px;
  }
`;

export const IconContainer = styled.div`
  width: 44.92px;
  height: 44.92px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 200;
  line-height: 16.8px;
  text-align: center;
  color: ${colors.black};
`;

export const OrderHistoryButton = styled.button`
  width: 206px;
  height: 48px;
  border: 1px solid;
  background-color: transparent;
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 200;
  line-height: 24px;
  text-align: center;
  color: ${colors.black};
  margin-top: 60px;
  cursor: pointer;
  &:hover {
    border-color: ${colors.black};
  }
  @media (max-width: 1400px) {
    display: none;
  }
`;
