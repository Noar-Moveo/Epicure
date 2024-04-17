import styled from "styled-components";

export const HeaderImg = styled.img`
  width: 100%;
  max-width: 1440px;
  height: auto;
  position: relative;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  position: absolute; 
  margin: 0;
  margin-top: 0px;
 //border: 5px solid darkblue;
  display: flex;
  justify-content: center; 
  align-items: center;
  height: auto; 
  top: 48px;
`;

export const SearchContainer = styled.div`
  width: 335px;
  height: 144px;
  min-width: 335px; 
  min-height: 144px; 
  max-width: 776px; 
  max-height: 221px; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background: #FFFFFFE0;
  //border: 5px solid firebrick;
  padding: 10px;
  padding-top: 16px;
  padding-bottom: 64px;
`;

export const HeaderSearch = styled.div`
  font-family: Helvetica Neue;
  font-size: 22px;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: 1.97px;
  text-align: left;
  //padding: 10px 16px;
  //padding-top: 30px;
  //padding-bottom: 64px;
  //border: 5px solid yellow;
`;

export const SearchBar = styled.div`
  width: 315px;
  height: 30px;
  min-width: 315px;
  min-height: 30px; 
  max-width: 505px; 
  max-height: 48px; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background: #FFFFFFE0;
  border: 0.5px solid #000000;
  padding: 10px;
  margin-bottom: 58px;
  margin-top:37px;

`;


// Radius
// 4px
// Border
// 0.5px
// Padding
// 6px, 12px, 6px, 12px
// Gap
// 8px