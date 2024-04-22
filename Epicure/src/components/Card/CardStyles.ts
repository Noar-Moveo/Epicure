import styled from "styled-components";

export const CardContainer = styled.div`
  /* width: 245px;
  height: 232.8px; */
  display: flex;
  flex-direction: column;
  gap: 0px;
  //border: 5px solid pink;
  @media (min-width: 900px) {
    width: auto;
    height: auto;
  }
`;

export const CardImage = styled.img`
  //width: 100%;
  height: 152px;
  width: 245px;
  @media (min-width: 900px) {
    width: 379px;
    height: 236px;
  }
`;
