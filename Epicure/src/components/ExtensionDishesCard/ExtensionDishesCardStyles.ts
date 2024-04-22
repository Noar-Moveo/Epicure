import styled from "styled-components";

export const Card = styled.div`
  background: #f9f4ea;
  padding: 10px;
  border-radius: 8px;
  width: 245px;
  height: 236px;
  display: flex;
  flex-direction: column;
  align-items: left;
  //border: 5px solid yellow;

  @media (min-width: 900px) {
    width: 380px;
    height: 348px;
    padding: 24px 0 8px;
    align-items: center;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: #333;
  font-family: "Helvetica Neue", Arial, sans-serif;

  @media (min-width: 900px) {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 2.67px;
    text-align: center;
  }
`;

export const Ingredients = styled.p`
  color: #666;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1.97px;
  margin-top: 8px;
  //border: 4px solid dodgerblue;
  @media (min-width: 900px) {
    //align-items: center;
    text-align: center;
    width: 295px;
    height: 123px;
    margin-top: 48px;
  }
`;

export const Icon = styled.img`
  width: 29.82px;
  height: 22.98px;
  margin: 12px 0;

  @media (min-width: 900px) {
    width: 39.76;
    height: 29.68px;
    align-items: center;
    //margin-top: 40;
    //top: 410px;
  }
`;

export const Price = styled.div`
  color: #000;
  font-weight: bold;
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 1.9700000286102295px;
  text-align: left;
  @media (min-width: 900px) {
    font-size: 24px;
    font-weight: 200;
    line-height: 30px;
    letter-spacing: 1.9700000286102295px;
  }
`;
