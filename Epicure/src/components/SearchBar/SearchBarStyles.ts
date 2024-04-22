import styled from "styled-components";
import colors from "../../colors";

export const SearchContainer1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 776px;
  height: 221px;
  background-color: rgba(255, 255, 255, 0.88);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background: ${colors.white}e0;
  padding: 10px;
  padding-top: 16px;
  padding-bottom: 64px;

  @media (max-width: 900px) {
    width: 335px;
    height: 144px;
  }
`;

// Weight
// 200
// Size
// 32px

export const TextSearch1 = styled.div`
  font-family: Helvetica Neue;
  font-size: 22px;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: 1.97px;
  text-align: center;
  margin-top: 0px; 
  font-weight: 300;
  //border: 5px solid firebrick;
  @media (min-width: 900px) {
    width: 452px;
    height: 80px;
    font-size: 32px;
    font-weight: 200;
  }
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
  //border: 5px solid darkblue;
  border-radius: 4px;
  ::placeholder {
    color: ${colors.black};
  }
  @media (min-width: 900px) {
    width: 505px;
    height: 48px;
    ::placeholder {
    color: ${colors.black};
    font-size: 34px;
    font-weight: 200;
  }
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
  //border: 5px solid pink;
  @media (min-width: 900px) {
    width: 505px;
    height: 48px;
    font-size: 34px;
    font-weight: 200;
  }
`;
