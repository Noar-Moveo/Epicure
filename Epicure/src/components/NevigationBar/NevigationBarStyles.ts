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

export const LastStyledIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer; 
  transition: transform 0.1s ease; 
  
  &:hover {
    transform: scale(1.1); 
  }
`;

export const CenteredContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 32.93px;
  height: 32px;
`;
