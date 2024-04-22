import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 120vh;
  //padding-left: 20px;

  //overflow: hidden;
  //border: 5px solid darkblue;

  .swiper-wrapper {
    align-items: center;
    display: flex;
    //border: 5px solid darkblue;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    //width: auto;
    margin-right: 24px;
    //border: 5px solid saddlebrown;
  }
`;

// export const StyledSwiperSlide = styled.div`
//   justify-content: center;
//   align-items: center;
// `;
export const CarouselContainer = styled.div`
  padding: 20px;
  //border: 5px solid yellow;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: auto;
  gap: 24px;
  justify-items: center;
  min-width: auto;
  //width: calc(100% - 40px);
  width: 100%;
  height: 100%;
`;

export const SwiperButtonNext = styled.button`
  font-size: 16px;
  padding: 10px;
  //position: absolute;
  font-weight: 400;
  left: 20px;
  top: calc(100% + 8.2px);
  cursor: pointer;
  font-family: Helvetica Neue;
  letter-spacing: 2px;
  background: none;

  @media (min-width: 1400px) {
    right: 20px;
    left: auto;
    margin-top: 40px;
    font-size: 24px;
    //border: 5px solid darkblue;
  }
`;

// export const Title = styled.h2`
//   font-family: $font;
//   font-size: 30px;
//   font-weight: 190;
//   line-height: 40px;
//   letter-spacing: 2px;
//   text-align: center;
// `;
