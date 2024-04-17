import NevigationBar from "../NevigationBar/NevigationBar.tsx";
import UserIcon from "../../assets/Icons/Person.png";
import MenuIcon from "../../assets/Icons/Menu.png";
import ExploreIcon from "../../assets/Icons/Explore.png";
import OrderIcon from "../../assets/Icons/Order.png";
import HeaderImage from "../../assets/Images/Header.png";
import {
  HeaderContainer,
  HeaderImg,
  SearchContainer,
  HeaderSearch,
  SearchBar
} from "./HeroStyles.ts";

function Hero() {
  const icons = [MenuIcon, ExploreIcon, UserIcon, OrderIcon];

  return (
    <>
      <NevigationBar icons={icons} />
      <HeaderContainer>
        <HeaderImg src={HeaderImage} alt="Header" />
      <SearchContainer>
        <HeaderSearch>
          Epicure works with the top chef restaurants in Tel Aviv
        </HeaderSearch>{" "}
      </SearchContainer>
      <SearchBar></SearchBar>
      </HeaderContainer>

    </>
  );
}

export default Hero;
