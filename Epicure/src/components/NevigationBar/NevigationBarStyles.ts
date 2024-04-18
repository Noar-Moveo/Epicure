import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100vw;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 20px;
  //border: 4px solid saddlebrown;
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
  
  &:hover {
    transform: scale(1.1); 
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
  //border: 5px solid saddlebrown;
  padding-left: 0px;

  @media (max-width: 899px) {
    justify-content: center;
  }

  @media (min-width: 900px) {
    justify-content: flex-start; 
  }

  img.logo, .epicure-title {
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
  letter-spacing: 1.9199999570846558px;
  text-align: left;

  &:hover {
    transform: scale(1.1); 
  }

  @media (max-width: 899px) {
    display: none;
  }
`;