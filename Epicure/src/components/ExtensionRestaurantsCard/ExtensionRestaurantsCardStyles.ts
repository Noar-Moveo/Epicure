import styled from "styled-components";
import colors from "../../colors";

export const Card = styled.div`
  background: ${colors.cream};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1400px) {
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

  @media (min-width: 900px) {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 2.67px;
    text-align: left;
  }
`;

export const Chef = styled.p`
  font-family: "Helvetica Neue", Arial, sans-serif;

  color: ${colors.black};

  @media (min-width: 900px) {
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

  @media (max-width: 1399px) {
    display: none;
  }
`;
