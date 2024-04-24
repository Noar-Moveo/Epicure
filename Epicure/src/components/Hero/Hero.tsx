import NevigationBar from "../NavigationBar/NavigationBar.tsx";
import HeaderImage from "../../assets/Images/Header.png";
import { HeaderContainer, HeaderImg } from "./HeroStyles.ts";
import SearchBar from "../SearchBar/SearchBar.tsx";
import UserIcon from "../../assets/Icons/Person.png";
import MenuIcon from "../../assets/Icons/Menu.png";
import ExploreIcon from "../../assets/Icons/Explore.png";
import OrderIcon from "../../assets/Icons/Order.png";
import { placeholder_searchBar } from "../../resources.ts";

function Hero() {
  const RESOURCES = {
    ICONS: [MenuIcon, ExploreIcon, UserIcon, OrderIcon],
  };
  const menuOptions = ["Restaurants", "Chefs"];

  return (
    <>
      <NevigationBar icons={RESOURCES.ICONS} menuOptions={menuOptions} />
      <HeaderContainer>
        <HeaderImg src={HeaderImage} alt="Header" />
        <SearchBar
          placeholder={placeholder_searchBar}
          icon={RESOURCES.ICONS[1]}
        />
      </HeaderContainer>
    </>
  );
}

export default Hero;
