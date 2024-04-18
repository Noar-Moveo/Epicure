import styled from "styled-components";
import colors from "../../colors";

export const SearchContainer1 = styled.div`
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
  background: ${colors.white}e0;  
  padding: 10px;
  padding-top: 16px;
  padding-bottom: 64px;
`;


export const TextSearch1 = styled.div`
  font-family: Helvetica Neue;
  font-size: 22px;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: 1.97px;
  text-align: center;
  margin-top: 0px; 
`;

export const SearchBar1 = styled.input`
  width: 100%;
  height: 30px;
  background: none;
  border: 0.5px solid ${colors.black};
  padding: 10px 10px 10px 40px;
  font-family: Helvetica Neue;
  font-size: 14px;
  color: ${colors.black};
  border-radius: 4px;
  ::placeholder {
    color: ${colors.black};
  }
`;

export const InputContainer = styled.div<{ icon: string }>`
  width: 315px;
  height: 50px;
  background-image: url(${(props) => props.icon});
  background-size: 20px;
  background-position: 10px center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: 125px; 
`;
