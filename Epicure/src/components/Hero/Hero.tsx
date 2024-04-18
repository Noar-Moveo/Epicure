import NevigationBar from "../NevigationBar/NevigationBar.tsx";
import UserIcon from "../../assets/Icons/Person.png";
import MenuIcon from "../../assets/Icons/Menu.png";
import ExploreIcon from "../../assets/Icons/Explore.png";
import OrderIcon from "../../assets/Icons/Order.png";
import HeaderImage from "../../assets/Images/Header.png";
import {
  HeaderContainer,
  HeaderImg,
} from "./HeroStyles.ts";
import SearchBar from "../SearchBar/SearchBar.tsx";

function Hero() {
  const icons = [MenuIcon, ExploreIcon, UserIcon, OrderIcon];
  const placeholder = "Search for restaurant cuisine, chef";

  return (
    <>
      <NevigationBar icons={icons} />
      <HeaderContainer>
        <HeaderImg src={HeaderImage} alt="Header" />
        <SearchBar placeholder={placeholder} icon={ExploreIcon} /> 
      </HeaderContainer>
    </>
  );
}

export default Hero;
