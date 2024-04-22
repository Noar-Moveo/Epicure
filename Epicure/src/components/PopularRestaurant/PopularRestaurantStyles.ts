import styled from "styled-components";

export const PopularRestaurantsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: 20px;
  //padding: 20px 0;
  //position: absolute;
  //border: 5px solid red;
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
  padding-left: 25px;
  @media (min-width: 900px) {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }
`;
