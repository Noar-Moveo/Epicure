import Carousel from "../Carousel/Carousel";
import ExtensionRestaurantCard from "../ExtensionRestaurantsCard/ExtensionRestaurantsCard";
import { RootState } from "../../state/store";
import { Restaurant } from "../../data/State/StateTypes";
import { PopularRestaurantsContainer } from "./PopularRestaurantStyles";
import { title_PopularRestaurants } from "../../data/resources";
const selectRestaurants = (state: RootState) => state.restaurants.value;

function PopularRestaurants() {
  return (
    <PopularRestaurantsContainer>
      <Carousel<Restaurant>
        title={title_PopularRestaurants}
        CardComponent={ExtensionRestaurantCard}
        dataSelector={selectRestaurants}
      />
    </PopularRestaurantsContainer>
  );
}

export default PopularRestaurants;
