import styled from "styled-components";

export const ChefProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  //border: 5px solid red;
`;

export const ChefBio = styled.p`
  padding: 20px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 1.25px;
  text-align: justify;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: left;
  margin-bottom: 17px;
  //border: 5px solid pink;
  padding-left: 20px;
  @media (min-width: 900px) {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
