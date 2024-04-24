import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 95vw;
  margin: 0 auto;
  flex-shrink: 0;

  .swiper-wrapper {
    align-items: center;
    display: flex;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: fit-content;
    flex-shrink: 0;
    //border: 5px solid darkblue;
    position: relative;
  }

  @media (max-width: 900px) {
    margin-left: 20px;
    margin-right: 0;
  }
`;

export const CarouselContainer = styled.div`
  justify-content: flex-start;
  min-width: auto;
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  //border: 5px solid saddlebrown;
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
  display: block;
  position: absolute;
  padding-top: 20px;
  left: 0;
  //border: 5px solid rebeccapurple;

  @media (max-width: 900px) {
    top: calc(80s% - 0px);
  }

  @media (min-width: 900px) {
  }
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
  padding-left: 28px;
  @media (min-width: 900px) {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
