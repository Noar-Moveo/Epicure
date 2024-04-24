import { RootState } from "../../state/store";

export interface CarouselProps<T> {
  CardComponent: React.ComponentType<T>;
  dataSelector: (state: RootState) => T[];
  title?: string;
  isChefProfile: boolean;
}
