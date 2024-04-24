import { useSelector } from "react-redux";
import {
  CarouselContainer,
  StyledSwiper,
  SwiperButtonNext,
  Title,
  ButtonSpacer,
  SwiperWrapper,
} from "./CarouselStyles";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import { CardItem } from "../Card/CardTypes";
import "swiper/css";
import "swiper/css/navigation";
//import "swiper/css/pagination";
import { CarouselProps } from "./CarouselTypes";
import { BREAKPOINTS } from "../../data/BreakPoints";

function Carousel<T extends CardItem>({
  CardComponent,
  dataSelector,
  title,
  isChefProfile,
}: CarouselProps<T>): JSX.Element {
  const dataItems = useSelector(dataSelector);

  return (
    <CarouselContainer>
      <Title>{title}</Title>
      <SwiperWrapper isChefProfile={isChefProfile}>
        <StyledSwiper
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation]}
          breakpoints={BREAKPOINTS}
        >
          {dataItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                item={item}
                Component={CardComponent}
                isChefProfile={isChefProfile}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </SwiperWrapper>
      <SwiperButtonNext>All Restaurants {">>"}</SwiperButtonNext>
      <ButtonSpacer />
    </CarouselContainer>
  );
}

export default Carousel;
