import styled from "styled-components";
import { Swiper } from "swiper/react";

interface SwiperWrapperProps {
  isChefProfile?: boolean;
}

export const SwiperWrapper = styled.div<SwiperWrapperProps>`
  width: 100%;
  max-width: 95vw;
  margin: 0 auto;

  @media (min-width: 1400px) {
    width: ${(props) => (props.isChefProfile ? "725px" : "100%")};
    height: ${(props) => (props.isChefProfile ? "432px" : "auto")};
  }
`;

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
    /* display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: fit-content;
    flex-shrink: 0;
    border: 5px solid darkblue;
    position: relative;
  } */
  }
`;

export const CarouselContainer = styled.div`
  //display: flex;
  //justify-content: flex-start;
  max-width: auto;
  min-width: auto;
  //width: 100%;
  height: 100%;
  //border: 5px solid saddlebrown;
  padding-left: 20px;
  @media (min-width: 900px) {
    //padding-left: 40px;
    //justify-content: center;
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
  display: block;
  padding-top: 20px;
  padding-left: 0px;
  //border: 5px solid rebeccapurple;

  @media (min-width: 1400px) {
    //isplay: flex;
    //justify-content: flex-end;
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
    margin-right: 20px;
  }
`;
