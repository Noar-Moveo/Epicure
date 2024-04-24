import Carousel from "../Carousel/Carousel";
import ExtensionChefRestaurantCard from "../ExtensionChefRestaurants/ExtensionChefRestaurantCard";
import { RootState } from "../../state/store";
import { Restaurant } from "../../data/State/StateTypes";
import { useSelector } from "react-redux";
import { ChefProfileContainer, ChefBio, Title } from "./ChefProfileStyles";
import {
  ChefOfWeek,
  ChefBioText,
  title_chefRestaurants,
} from "../../resources";

const selectYossiShitritRestaurants = (state: RootState) =>
  state.restaurants.value.filter(
    (restaurant) => restaurant.chef === "Yossi Shitrit"
  );

const ChefProfile = () => {
  const restaurants = useSelector(selectYossiShitritRestaurants);

  return (
    <ChefProfileContainer>
      <Title> {ChefOfWeek} </Title>
      <ChefBio> {ChefBioText}</ChefBio>
      <Carousel<Restaurant>
        title={title_chefRestaurants}
        CardComponent={(props) => (
          <ExtensionChefRestaurantCard {...props} isChefProfile={true} />
        )}
        dataSelector={() => restaurants}
      />
    </ChefProfileContainer>
  );
};

export default ChefProfile;
