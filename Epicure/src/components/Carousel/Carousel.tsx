import { useSelector } from "react-redux";
import {
  CarouselContainer,
  StyledSwiper,
  SwiperButtonNext,
  //Title
} from "./CarouselStyles";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import { CardItem } from "../Card/CardTypes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselProps } from "./CarouselTypes";

function Carousel<T extends CardItem>({
  CardComponent,
  dataSelector,
}: CarouselProps<T>): JSX.Element {
  const dataItems = useSelector(dataSelector);

  return (
    <CarouselContainer>
      <StyledSwiper
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          375: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          400: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {dataItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} Component={CardComponent} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SwiperButtonNext>All Restaurants {">>"}</SwiperButtonNext>
    </CarouselContainer>
  );
}

export default Carousel;
