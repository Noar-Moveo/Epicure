import styled from "styled-components";

export const PopularRestaurantsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  //border: 5px solid red;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;
