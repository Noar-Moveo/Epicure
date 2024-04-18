import NevigationBar from "../NevigationBar/NevigationBar.tsx";
import HeaderImage from "../../assets/Images/Header.png";
import {
  HeaderContainer,
  HeaderImg,
} from "./HeroStyles.ts";
import SearchBar from "../SearchBar/SearchBar.tsx";
import { RESOURCES}  from '../../resources.ts';

function Hero() {



  return (
    <>
      <NevigationBar icons={RESOURCES.ICONS} menuOptions={RESOURCES.MENU_OPTIONS} />
      <HeaderContainer>
        <HeaderImg src={HeaderImage} alt="Header" />
        <SearchBar placeholder={RESOURCES.PLACEHOLDER} icon={RESOURCES.ICONS[1]} />
      </HeaderContainer>
    </>
  );
}

export default Hero;
