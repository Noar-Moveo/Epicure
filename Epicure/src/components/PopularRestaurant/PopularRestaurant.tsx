import { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import ExtensionRestaurantCard from "../ExtensionRestaurantsCard/ExtensionRestaurantsCard";
import { RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "../../data/State/StateTypes";
import { PopularRestaurantsContainer } from "./PopularRestaurantStyles";
import { title_PopularRestaurants } from "../../data/resources";
import { fetchRestaurants } from "../../state/features/restaurants/restaurantsSlice";

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
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);

  // Polling to fetch the latest restaurants data
  useEffect(() => {
    // Initial fetch
    dispatch(fetchRestaurants()).then(() => {
      console.log("Restaurants fetched");
    });

    // Set up polling
    const interval = setInterval(() => {
      dispatch(fetchRestaurants()).then(() => {
        console.log("Restaurants updated");
      });
    }, 10000); // Poll every 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch]);
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
