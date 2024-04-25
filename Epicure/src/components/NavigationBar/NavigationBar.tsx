import { useState } from "react";
import {
  StyledIcon,
  NavigationContainer,
  FirstStyledIcon,
  RightContainer,
  CenteredContainer,
  DropdownMenu,
  DropdownContainer,
  DropdownSeparator,
  DropdownItem,
  Modal,
  CloseButton,
  IconContainer,
  OrderIconPopover,
  Title,
} from "./NavigationBarStyles";
import Logo from "../../assets/Icons/about-logo@3x 1.png";
import { NavigationBarProps } from "./Types";
import SearchBar from "../SearchBar/SearchBar";
import { searchTitleIcon, placeholder_searchBar, orderIconTitle } from "../../data/resources";

const NavigationBar: React.FC<NavigationBarProps> = ({
  icons,
  menuOptions,
  menuItems,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isOrderPopoverOpen, setIsOrderPopoverOpen] = useState(false); // Add state for order icon popover

  const toggleDropdown = () => {
    console.log("Toggle dropdown");
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleIconClick = (index: number) => {
    console.log(`Icon ${index} clicked`);
    if (index === 0) {
      setIsSearchModalOpen(true);
    } else if (index === 2) {
      setIsOrderPopoverOpen(!isOrderPopoverOpen);
    }
  };

  const closeDropdown = () => {
    console.log("Close dropdown");
    setIsDropdownOpen(false);
  };

  const closeSearchModal = () => setIsSearchModalOpen(false);

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
            <DropdownItem onClick={closeDropdown}>X</DropdownItem>
            {menuOptions.map((option, index) => (
              <DropdownItem key={index}>{option} </DropdownItem>
            ))}
            <DropdownSeparator />
            {menuItems.map((item, index) => (
              <DropdownItem key={index}>{item}</DropdownItem>
            ))}
          </DropdownMenu>
        </DropdownContainer>
      )}
      {isSearchModalOpen && (
        <Modal>
          <CloseButton onClick={closeSearchModal}>X</CloseButton>
          <SearchBar
            placeholder={placeholder_searchBar}
            icon={icons[1]}
            title={searchTitleIcon}
          />
        </Modal>
      )}
      {isOrderPopoverOpen && (
        <OrderIconPopover>
          <IconContainer>
            <img src={icons[3]} alt="Order Icon" />
          </IconContainer>
          <Title>{orderIconTitle}</Title>
        </OrderIconPopover>
      )}
    </NavigationContainer>
  );
};

export default NavigationBar;
