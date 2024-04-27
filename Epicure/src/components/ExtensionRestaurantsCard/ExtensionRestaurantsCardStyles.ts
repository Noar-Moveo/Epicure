import styled from "styled-components";
import colors from "../../data/colors";

export const Card = styled.div`
  background: ${colors.cream};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 245px;
  height: Fixed (81px) px;
  padding-top: 16px;
  gap: 10px;

  @media (min-width: 1200px) {
    padding: 24px 0;
    height: 169px;
    align-items: center;
    width: 379px;
    height: 236px;
  }
`;


export const Title = styled.h3`
  margin: 0;
  color: ${colors.black};
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.47px;
  letter-spacing: 2.6700000762939453px;
  text-align: left;
  @media (min-width: 1200px) {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 47px;
  }
`;

export const Chef = styled.p`
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 200;
  color: ${colors.black};

  @media (min-width: 1200px) {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 24px;
    font-weight: 200;
    line-height: 30px;
    letter-spacing: 1.97px;
    text-align: left;
  }
`;

export const Stars = styled.img`
  width: 216px;
  height: 40px;
  align-self: center;
  margin-top: 8px;

  @media (max-width: 1199px) {
    display: none;
  }
`;


