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
import { CarouselProps } from "./CarouselTypes";
import { BREAKPOINTS } from "../../data/BreakPoints";
import { Fade } from 'react-awesome-reveal';



function Carousel<T extends CardItem>({
  CardComponent,
  dataSelector,
  title,
  isChefProfile,
}: CarouselProps<T>): JSX.Element {
  const dataItems = useSelector(dataSelector);

  return (
    <CarouselContainer>
      <Title isChefProfile={isChefProfile}>{title}</Title>
      <SwiperWrapper isChefProfile={isChefProfile}>
      <Fade >
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
        </Fade>
      </SwiperWrapper>
      {!isChefProfile && (
        <SwiperButtonNext>All Restaurants {">>"}</SwiperButtonNext>
      )}
      <ButtonSpacer />
    </CarouselContainer>
  );
}

export default Carousel;
