import Carousel from "../Carousel/Carousel";
import ExtensionChefRestaurantCard from "../ExtensionChefRestaurants/ExtensionChefRestaurantCard";
import { RootState } from "../../state/store";
import { Restaurant } from "../../data/State/StateTypes";
import { useSelector } from "react-redux";
import {
  ChefProfileContainer,
  ChefBio,
  Title,
  CardImage,
  NameOnImage,
  CardImageContainer,
  ChefInfoContainer,
  CaoruselChef,
} from "./ChefProfileStyles";
import {
  ChefOfWeek,
  ChefBioText,
  title_chefRestaurants,
} from "../../data/resources";
import ChefPicture from "../../assets/Images/YosiChef.png";

const selectYossiShitritRestaurants = (state: RootState) =>
  state.restaurants.value.filter(
    (restaurant) => restaurant.chef === "Yossi Shitrit"
  );

const ChefProfile = () => {
  const restaurants = useSelector(selectYossiShitritRestaurants);

  return (
    <ChefProfileContainer>
      <Title> {ChefOfWeek} </Title>
      <ChefInfoContainer>
        <CardImageContainer>
          <CardImage src={ChefPicture} alt="Chef Yossi Shitrit" />
          <NameOnImage>Yossi Shitrit</NameOnImage>
        </CardImageContainer>
        <ChefBio> {ChefBioText}</ChefBio>
      </ChefInfoContainer>
      <CaoruselChef>
        <Carousel<Restaurant>
          title={title_chefRestaurants}
          CardComponent={(props) => <ExtensionChefRestaurantCard {...props} />}
          dataSelector={() => restaurants}
          isChefProfile={true}
        />
      </CaoruselChef>
    </ChefProfileContainer>
  );
};

export default ChefProfile;
