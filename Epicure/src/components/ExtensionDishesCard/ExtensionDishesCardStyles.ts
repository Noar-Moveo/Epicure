import styled from "styled-components";
import colors from "../../data/colors";

export const Card = styled.div`
  background: ${colors.cream};
  border-radius: 8px;
  width: 245px;
  height: 236px;
  display: flex;
  flex-direction: column;
  align-items: left;
  //border: 5px solid yellow;
  padding-top: 16px;
  padding-left: 16px;
  position: relative;

  @media (min-width: 1200px) {
    width: 380px;
    height: 348px;
    align-items: center;
  }
`;


export const Title = styled.h3`
  margin: 0;
  color: ${colors.black};
  font-family: "Helvetica Neue", Arial, sans-serif;
  order: 1;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.47px;
  letter-spacing: 2.6700000762939453px;
  @media (min-width: 1200px) {
    font-size: 40px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 2.67px;
    text-align: center;
  }
`;

export const Ingredients = styled.p`
  color: ${colors.black};
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1.97px;
  margin-top: 8px;
  order: 2;
  width: 209px;
  height: 100px;
  //border: 4px solid dodgerblue;
  @media (min-width: 1200px) {
    text-align: center;
    width: 295px;
    height: 123px;
    font-size: 24px;
    order: 3;
  }
`;

export const Icon = styled.img`
  width: 29.82px;
  height: 22.98px;
  margin: 12px 0;
  order: 3;
  @media (min-width: 1200px) {
    width: 39.76;
    height: 29.68px;
    align-items: center;
    order: 2;
  }
`;

export const Price = styled.div`
  color: ${colors.black};
  font-weight: bold;
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 1.9700000286102295px;
  text-align: left;
  order: 4;
  position: absolute; 
  bottom: 16px;
  left: 16px; 
  @media (min-width: 1200px) {
    position: relative;
    bottom: 0px;
    left: 0px;
    font-size: 24px;
    font-weight: 200;
    margin: 0 8px;
    line-height: 30px;
    letter-spacing: 1.9700000286102295px;
    margin-top: 35px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 112px;
      height: 0.5px;
      border: 0.5px 0px 0px 0px;
      background-color: ${colors.darkGray};
    }

    &::before {
      right: 100%;
      margin-right: 10px;
    }

    &::after {
      left: 100%;
      margin-left: 10px;
    }
  }
`;

export const ILS = styled.span`
  color: ${colors.black};
  font-weight: bold;
  font-family: Helvetica Neue;
  
  //border: 5px solid darkblue;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.9700000286102295px;
  text-align: left;
  @media (min-width: 1200px) {
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    font-weight: 200;
    margin: 0 2px;
    line-height: 30px;
    letter-spacing: 1.9700000286102295px;
  }
  `;