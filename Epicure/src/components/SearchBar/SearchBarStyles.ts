import styled from "styled-components";

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
  background: #ffffffe0;
  //border: 5px solid firebrick;
  padding: 10px;
  padding-top: 16px;
  padding-bottom: 64px;
  //border: 5px solid pink;
`;


export const TextSearch1 = styled.div`
  font-family: Helvetica Neue;
  font-size: 22px;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: 1.97px;
  text-align: center;
  //border: 5px solid saddlebrown;
  margin-top: 0px; 
`;

export const SearchBar1 = styled.input`
  width: 100%;
  height: 30px;
  background: none;
  border: 0.5px solid #000000;
  padding: 10px 10px 10px 40px;
  font-family: Helvetica Neue;
  font-size: 14px;
  color: #000000;
  border-radius: 4px;
  ::placeholder {
    color: #000000;
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
  //border: 5px solid darkblue;
  position: absolute;
  margin-top: 125px; 
`;
