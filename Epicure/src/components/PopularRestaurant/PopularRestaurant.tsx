import Carousel from "../Carousel/Carousel";
import ExtensionRestaurantCard from "../ExtensionRestaurantsCard/ExtensionRestaurantsCard";
import { RootState } from "../../state/store";
import { Restaurant } from "../../data/State/StateTypes";
import { PopularRestaurantsContainer, Title } from "./PopularRestaurantStyles";
const selectRestaurants = (state: RootState) => state.restaurants.value;

function PopularRestaurants() {
  return (
    <PopularRestaurantsContainer>
      <Title>Popular Restaurants in Epicure:</Title>
      <Carousel<Restaurant>
        CardComponent={ExtensionRestaurantCard}
        dataSelector={selectRestaurants}
      />
    </PopularRestaurantsContainer>
  );
}

export default PopularRestaurants;
