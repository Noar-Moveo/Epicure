import { useSelector } from "react-redux";
import {
  CarouselContainer,
  StyledSwiper,
  AllRestaurantsButton,
  Title,
  SwiperWrapper,
} from "./CarouselStyles";
import { SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import { CardItem } from "../Card/CardTypes";
import "swiper/css";
import "swiper/css/navigation";
import { CarouselProps } from "./CarouselTypes";
import { BREAKPOINTS } from "../../data/BreakPoints";
import { Fade } from "react-awesome-reveal";

function Carousel<T extends CardItem>({
  CardComponent,
  dataSelector,
  title,
  isChefProfile,
  isVisible,
}: CarouselProps<T>): JSX.Element {
  const dataItems = useSelector(dataSelector);

  return (
    <CarouselContainer>
      <Title isChefProfile={isChefProfile}>{title}</Title>
      <SwiperWrapper isChefProfile={isChefProfile}>
        <Fade>
          <StyledSwiper
            spaceBetween={24}
            slidesPerView={3}
            pagination={{ clickable: true }}
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
      <AllRestaurantsButton isVisible={isVisible}>
      All Restaurants {">>"}
    </AllRestaurantsButton>
    </CarouselContainer>
  );
}

export default Carousel;
