import Hero from "../components/Hero/Hero";
import PopularRestaurants from "../components/PopularRestaurant/PopularRestaurant";
import { HomePageContainer } from "./HomePageStyles";
import SignatureDishes from "../components/SignatureDishes/SignatureDishes";
import ChefProfile from "../components/ChefProfile/ChefProfile";

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Hero />
      <PopularRestaurants />
      <SignatureDishes />
      <ChefProfile />
    </HomePageContainer>
  );
};

export default HomePage;
