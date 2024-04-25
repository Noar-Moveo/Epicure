import NavigationBar from "../NavigationBar/NavigationBar.tsx";
import HeaderImage from "../../assets/Images/Header.png";
import { HeaderContainer, HeaderImg } from "./HeroStyles.ts";
import SearchBar from "../SearchBar/SearchBar.tsx";
import { placeholder_searchBar } from "../../data/resources.ts";
import { menuOptions, menuItems } from "../../data/Menu.ts";
import { icons } from "../../data/Menu.ts";
import { SearchTitle } from "../../data/resources";

function Hero() {
  return (
    <>
      <NavigationBar
        icons={icons}
        menuOptions={menuOptions}
        menuItems={menuItems}
      />
      <HeaderContainer>
        <HeaderImg src={HeaderImage} alt="Header" />
        <SearchBar
          placeholder={placeholder_searchBar}
          icon={icons[1]}
          title={SearchTitle}
        />
      </HeaderContainer>
    </>
  );
}

export default Hero;
