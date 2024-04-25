import styled from "styled-components";
import { Swiper } from "swiper/react";
import { SwiperWrapperProps } from "./CarouselTypes";


export const SwiperWrapper = styled.div<SwiperWrapperProps>`
  width: 100%;
  max-width: 95vw;
  margin: 0 auto;

  @media (min-width: 1200px) {
    width: ${(props) => (props.isChefProfile ? "725px" : "100%")};
    height: ${(props) => (props.isChefProfile ? "432px" : "auto")};
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 95vw;
  margin: 0 auto;
  flex-shrink: 0;
  //border: 5px solid darkblue;

  .swiper-wrapper {
    align-items: center;
    display: flex;
  
  }

  .swiper-slide {
    margin-right: 0px;
  }
 
`;

export const CarouselContainer = styled.div`
  max-width: auto;
  min-width: auto;
  height: 100%;
  width: auto;
  //border: 5px solid saddlebrown;
  padding-left: 20px;
  @media (min-width: 900px) {
    align-self: center;
  }
`;

export const ButtonSpacer = styled.div`
  height: 60px;
  width: 100%;
`;

export const SwiperButtonNext = styled.button`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  font-family: Helvetica Neue;
  letter-spacing: 2px;
  background: none;
  display: inline-block;
  padding-top: 20px;
  padding-left: 10px;
  //border: 5px solid rebeccapurple;

  @media (min-width: 1400px) {
    position: absolute;
    margin-left: 1170px;
  }
`;

export const Title = styled.h2<SwiperWrapperProps>`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: left;
  margin-bottom: 17px;
  //border: 5px solid pink;
  padding-left: 8px;
  @media (min-width: 900px) {
    font-size: 30px;
    line-height: 35px;
    text-align: ${({ isChefProfile }) => (isChefProfile ? "left" : "center")};
    margin-bottom: 40px;
    margin-right: 20px;
  }
`;

