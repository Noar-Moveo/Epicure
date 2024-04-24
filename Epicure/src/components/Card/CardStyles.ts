import styled from "styled-components";
// import { CardProps, CardItem } from "./CardTypes";

interface CardImageProps {
  isChefProfile?: boolean;
}

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

export const CardImage = styled.img<CardImageProps>`
  height: 152px;
  width: 245px;

  @media (min-width: 900px) {
    width: ${(props) => (props.isChefProfile ? "231px" : "379px")};
    height: ${(props) => (props.isChefProfile ? "224px" : "236px")};
    opacity: ${(props) => (props.isChefProfile ? 0 : 1)};
  }
`;
