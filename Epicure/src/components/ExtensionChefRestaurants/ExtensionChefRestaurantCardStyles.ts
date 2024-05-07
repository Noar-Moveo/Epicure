import styled from "styled-components";
import colors from "../../data/colors";

export const Card = styled.div`
  background: ${colors.cream};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 245px;
  height: 81px;
  gap: 10px;
  border: 5px solid d;

  @media (min-width: 1200px) {
    padding: 20px 0;
    align-items: center;
    width: 231px;
    height: 133px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: ${colors.black};
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 2.6700000762939453px;
  text-align: left;

  @media (min-width: 1200px) {
    font-size: 30px;
    line-height: 47px;
    text-align: center;
  }
`;
