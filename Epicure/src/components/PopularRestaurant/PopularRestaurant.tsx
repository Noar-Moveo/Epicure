import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useFetchData";
import { fetchRestaurants } from "../../state/features/restaurants/restaurantsSlice";
import Carousel from "../Carousel/Carousel";
import ExtensionRestaurantCard from "../ExtensionRestaurantsCard/ExtensionRestaurantsCard";
import { RootState } from "../../state/store";
import { Restaurant } from "../../data/State/StateTypes";
import { PopularRestaurantsContainer } from "./PopularRestaurantStyles";
import { title_PopularRestaurants } from "../../data/resources";
import { useSelector } from "react-redux";

const selectRestaurants = (state: RootState) =>
  state.restaurants.value.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    chef: item.chef,
    status: item.status,
    dishes: item.dishes,
  }));

function PopularRestaurants() {
  const dispatch = useAppDispatch();
  const restaurants = useSelector(
    (state: RootState) => state.restaurants.value
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  console.log("Restaurants from state:", restaurants);

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
