import { RootState } from "../../state/store";

export interface CarouselProps<T> {
  CardComponent: React.ComponentType<T>;
  dataSelector: (state: RootState) => T[];
  title?: string;
  isChefProfile?: boolean;
  isVisible?: boolean;
}

export interface SwiperWrapperProps {
  isChefProfile?: boolean;
}
export interface SwiperWrapperProps_ {
  isVisible?: boolean;
}