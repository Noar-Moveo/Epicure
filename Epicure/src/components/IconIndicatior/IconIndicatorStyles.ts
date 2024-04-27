import styled from "styled-components";
import colors from "../../data/colors";

export const IconIndicatorContainer = styled.section`
  width: 100%;
  left: -1px;
  gap: 0px;
  background: ${colors.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-top: 78px;
  //border: 5px solid darkblue;
  @media (min-width: 1200px) {
    gap: 30px;
    margin-top: 80px;
  }
`;


export const Title = styled.h3`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  margin-bottom: 40px;
  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const Icons_ = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    gap: 70px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
  //border: 5px solid darkblue;
  @media (min-width: 1200px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Icon = styled.img`
  width: auto;
  height: 60px;
  margin-right: 10px;
  @media (min-width: 1200px) {
    margin-right: 20px;
    width: 69.58px;
    height: 43.83px;
  }
`;

export const Text = styled.span`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 1.25px;
  margin-bottom: 20px;
  text-align: center;
  padding-top: 30px;
  @media (min-width: 1200px) {
    padding-top: 0;
    margin-bottom: 0;
  }
`;
