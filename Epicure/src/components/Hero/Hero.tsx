import NevigationBar from "../NavigationBar/NavigationBar.tsx";
import HeaderImage from "../../assets/Images/Header.png";
import {
  HeaderContainer,
  HeaderImg,
} from "./HeroStyles.ts";
import SearchBar from "../SearchBar/SearchBar.tsx";
import { RESOURCES}  from '../../resources.ts';

function Hero() {

  const placeholder =  "Search for restaurant cuisine, chef"
  const menuOptions =  ["Restaurants", "Chefs"];


  return (
    <>
      <NevigationBar icons={RESOURCES.ICONS} menuOptions={menuOptions} />
      <HeaderContainer>
        <HeaderImg src={HeaderImage} alt="Header" />
        <SearchBar placeholder={placeholder} icon={RESOURCES.ICONS[1]} />
      </HeaderContainer>
    </ >
  );
}

export default Hero;
