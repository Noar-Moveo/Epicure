import Hero from "../components/Hero/Hero";
import PopularRestaurants from "../components/PopularRestaurant/PopularRestaurant";
import { HomePageContainer } from "./HomePageStyles";
import SignatureDishes from "../components/SignatureDishes/SignatureDishes";
import ChefProfile from "../components/ChefProfile/ChefProfile";
import IconIndicator from "../components/IconIndicatior/IconIndicator";
import Footer from "../components/Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Hero />
      <PopularRestaurants />
      <SignatureDishes />
      <IconIndicator />
      <ChefProfile />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
