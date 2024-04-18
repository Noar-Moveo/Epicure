import {
  StyledIcon,
  NavigationContainer,
  FirstStyledIcon,
  RightContainer,
  CenteredContainer,
  MenuOption,
} from "./NevigationBarStyles";
import Logo from '../../assets/Icons/about-logo@3x 1.png';
import { NavigationBarProps } from './Types';


const handleIconClick = (index: number) => {
    console.log(`Icon ${index} clicked`); 
  };

const NavigationBar: React.FC<NavigationBarProps> = ({ icons, menuOptions }) => {
    const slicedIcons = icons.slice(1);
    const rightIcons = slicedIcons.map((icon, index) => (
      <StyledIcon key={index} onClick={() => handleIconClick(index)}>
        <img src={icon} alt={`Icon ${index}`} />
      </StyledIcon>
    ));

    return (
      <NavigationContainer>
          <FirstStyledIcon onClick={() => handleIconClick(0)}>
              <img src={icons[0]} alt="Icon 0" />
          </FirstStyledIcon>
          <CenteredContainer>
              <img src={Logo} alt="Logo" />
              <span className="epicure-title">EPICURE</span>
              {menuOptions.map((option, index) => (
          <MenuOption key={index}>{option}</MenuOption>
        ))}
          </CenteredContainer>
          <RightContainer>
              {rightIcons}
          </RightContainer>
      </NavigationContainer>
    );
};
    
    export default NavigationBar;

