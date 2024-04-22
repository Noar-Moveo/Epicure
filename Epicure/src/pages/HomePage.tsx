import Hero from "../components/Hero/Hero";
import PopularRestaurants from "../components/PopularRestaurant/PopularRestaurant";
import { HomePageContainer } from "./HomePageStyles";
import SignatureDishes from "../components/SignatureDishes/SignatureDishes";

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Hero />
      <PopularRestaurants />
      <SignatureDishes />
    </HomePageContainer>
  );
};

export default HomePage;
