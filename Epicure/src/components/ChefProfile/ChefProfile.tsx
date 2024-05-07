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


const chefId = "6639118f3654df23dfe83983";

const selectRestaurantsByChefId = (state: RootState) =>
  state.restaurants.value.filter(
    (restaurant) => restaurant.chef === chefId
  );

const ChefProfile = () => {
  const dispatch = useAppDispatch();
  const restaurants = useSelector(selectRestaurantsByChefId);

  useEffect(() => {
    dispatch(fetchRestaurants());
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
        dataSelector={selectRestaurantsByChefId}
        isChefProfile={true}
      />
    </ChefProfileContainer>
  );
};

export default ChefProfile;