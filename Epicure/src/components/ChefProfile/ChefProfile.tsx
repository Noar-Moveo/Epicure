import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useFetchData";
import { useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import ExtensionChefRestaurantCard from "../ExtensionChefRestaurants/ExtensionChefRestaurantCard";
import { RootState } from "../../state/store";
import { Restaurant } from "../../data/State/StateTypes";
import { fetchRestaurants } from "../../state/features/restaurants/restaurantsSlice";
import {
  ChefProfileContainer,
  ChefBio,
  Title,
  CardImage,
  NameOnImage,
  CardImageContainer,
  ChefInfoContainer,
} from "./ChefProfileStyles";
import {
  ChefOfWeek,
  ChefBioText,
  title_chefRestaurants,
} from "../../data/resources";
import ChefPicture from "../../assets/Images/YosiChef.png";
import { Fade } from "react-awesome-reveal";

const chefName = "Yossi Shitrit";

const selectRestaurantsByChef = (state: RootState): Restaurant[] =>
  state.restaurants.value
    .filter((restaurant) => restaurant.chef.name === chefName)
    .map((restaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
      image: restaurant.image,
      chef: restaurant.chef,
      status: restaurant.status,
      stars: restaurant.stars,
      dishes: restaurant.dishes,
    }));

const ChefProfile = () => {
  const dispatch = useAppDispatch();
  const restaurants = useSelector(selectRestaurantsByChef);
  console.log("Restaurants from state:", restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants()).then(() => {
      console.log("Restaurants fetched");
    });
  }, [dispatch]);

  console.log("Restaurants from state for Chef ID:", restaurants);

  return (
    <ChefProfileContainer>
      <Title> {ChefOfWeek} </Title>
      <ChefInfoContainer>
        <Fade>
          <CardImageContainer>
            <CardImage src={ChefPicture} alt="Chef Yossi Shitrit" />
            <NameOnImage>Yossi Shitrit</NameOnImage>
          </CardImageContainer>
        </Fade>
        <ChefBio> {ChefBioText}</ChefBio>
      </ChefInfoContainer>
      <Carousel<Restaurant>
        title={title_chefRestaurants}
        CardComponent={(props) => <ExtensionChefRestaurantCard {...props} />}
        dataSelector={selectRestaurantsByChef}
        isChefProfile={true}
      />
    </ChefProfileContainer>
  );
};

export default ChefProfile;
