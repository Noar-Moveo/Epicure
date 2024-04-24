import styled from "styled-components";

export const Card = styled.div`
  background: #f9f4ea;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1400px) {
    padding: 24px 0;
    align-items: center;
    width: 231px;
    height: 133px;
    padding: 20px 0px 0px 0px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: #333;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2.6700000762939453px;
  text-align: left;

  @media (min-width: 900px) {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 2.67px;
    text-align: left;
  }
`;
