
import Carousel from "../Carousel/Carousel";
import ExtensionRestaurantCard from "../ExtensionRestaurantsCard/ExtensionRestaurantsCard";
import { RootState } from "../../state/store";
import { Restaurant } from "../../data/State/StateTypes";
import { PopularRestaurantsContainer } from "./PopularRestaurantStyles";
import { title_PopularRestaurants } from "../../data/resources";

const selectRestaurants = (state: RootState) =>
  state.restaurants.value.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    chef: item.chef,
    status: item.status,
    stars: item.stars,
    dishes: item.dishes,
  }));

function PopularRestaurants() {

  return (
    <PopularRestaurantsContainer>
      <Carousel<Restaurant>
        title={title_PopularRestaurants}
        CardComponent={ExtensionRestaurantCard}
        dataSelector={selectRestaurants}
        isVisible={true}
      />
    </PopularRestaurantsContainer>
  );
}

export default PopularRestaurants;
