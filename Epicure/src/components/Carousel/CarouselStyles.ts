import styled from "styled-components";
import { Swiper } from "swiper/react";
import { SwiperWrapperProps, SwiperWrapperProps_ } from "./CarouselTypes";

export const SwiperWrapper = styled.div<SwiperWrapperProps>`
  width: 100%;
  //border: 5px solid pink;
  align-items: center;
  justify-content: center;
  @media (min-width: 1200px) {
    width: ${(props) => (props.isChefProfile ? "725px" : "100%")};
    height: ${(props) => (props.isChefProfile ? "357px" : "fit-content")};
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 1185px;

  display: flex;
  align-items: center;
  //border: 5px solid darkblue;
  gap: 0px;
  .swiper-wrapper {
    align-items: center;
    display: flex;
    //border: 5px solid darkblue;
    position: relative;
  }

  .swiper-slide {
    margin-right: 0px;
    display: flex;
    //border: 5px solid rebeccapurple;
    justify-content: center;
    align-items: center;
  }
`;

export const CarouselContainer = styled.div`
  max-width: auto;
  min-width: auto;
  padding-left: 20px;
  height: 100%;
  width: 100%;
  //border: 5px solid saddlebrown;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) {
    align-self: center;
    padding-left: 0px;
  }
`;

export const AllRestaurantsButton = styled.button<SwiperWrapperProps_>`
  display: block;
  border: none;
  position: absolute;
  background-color: transparent;
  margin-top: 18.2px;
  //border: 5px solid darkblue;
  cursor: pointer;
  font-size: 16px;
  font-family: Helvetica Neue;
  font-weight: 400;
  width: 182px;
  height: 30px;
  letter-spacing: 2px;
  @media (min-width: 900px) {

    margin-left: 3%;
    position: absolute;
  }
  @media (min-width: 1100px) {
    margin-left: 5%;
  }
  @media (min-width: 1200px) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    position: absolute;
    font-size: 24px;
    margin-left: 0%;
    width: 242px;
    height: 30px;
    left: 50%;
    transform: translateX(350px);
    margin-top: 40px;
  }
`;
// font-size: 24px;
// font-weight: 400;
// line-height: 35px;
// letter-spacing: 2px;
// text-align: right;



export const Title = styled.h2<SwiperWrapperProps>`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: left;
  margin-bottom: 17px;
  padding-left: 10px;
  //border: 5px solid pink;
  @media (min-width: 900px) {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
    margin-right: 20px;
  }
  @media (min-width: 1400px) {
    font-size: 30px;
    line-height: 35px;
    text-align: ${({ isChefProfile }) => (isChefProfile ? "left" : "center")};
    margin-bottom: 40px;
    margin-right: 20px;
  }
`;
