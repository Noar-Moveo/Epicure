import { useState } from "react";
import {
  StyledIcon,
  NavigationContainer,
  FirstStyledIcon,
  RightContainer,
  CenteredContainer,
  //MenuOption,
  DropdownMenu,
  DropdownContainer,
  DropdownSeparator,
  DropdownItem,
} from "./NavigationBarStyles";
import Logo from "../../assets/Icons/about-logo@3x 1.png";
import { NavigationBarProps } from "./Types";

const NavigationBar: React.FC<NavigationBarProps> = ({
  icons,
  menuOptions,
  menuItems,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("Toggle dropdown");
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleIconClick = (index: number) => {
    console.log(`Icon ${index} clicked`);
  };
  const slicedIcons = icons.slice(1);
  const rightIcons = slicedIcons.map((icon, index) => (
    <StyledIcon key={index} onClick={() => handleIconClick(index)}>
      <img src={icon} alt={`Icon ${index}`} />
    </StyledIcon>
  ));
  console.log("Dropdown Open:", isDropdownOpen);
  return (
    <NavigationContainer>
      <FirstStyledIcon onClick={toggleDropdown}>
        <img src={icons[0]} alt="Icon 0" />
      </FirstStyledIcon>
      <CenteredContainer>
        <img src={Logo} alt="Logo" />
        <span className="epicure-title">EPICURE</span>
      </CenteredContainer>
      <RightContainer>{rightIcons}</RightContainer>
      {isDropdownOpen && (
        <DropdownContainer>
          <DropdownMenu>
            {menuOptions.map((option, index) => (
              <DropdownItem key={index}>{option}</DropdownItem>
            ))}
            <DropdownSeparator />
            {menuItems.map((item, index) => (
              <DropdownItem key={index}>{item}</DropdownItem>
            ))}
          </DropdownMenu>
        </DropdownContainer>
      )}
    </NavigationContainer>
  );
};

export default NavigationBar;
