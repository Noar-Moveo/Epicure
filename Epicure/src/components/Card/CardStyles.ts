import styled from "styled-components";

interface CardImageProps {
  isChefProfile?: boolean;
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  //border: 5px solid pink;
  @media (min-width: 1400px) {
    width: auto;
    height: auto;
  }
`;

export const CardImage = styled.img<CardImageProps>`
  height: 152px;
  width: 245px;

  @media (min-width: 1400px) {
    width: ${(props) => (props.isChefProfile ? "231px" : "379px")};
    height: ${(props) => (props.isChefProfile ? "224px" : "236px")};
  }
`;
