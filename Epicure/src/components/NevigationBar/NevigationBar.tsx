import {
  StyledIcon,
  NavigationContainer,
  LastStyledIcon,
  RightContainer,
  CenteredContainer
} from "./NevigationBarStyles";
import Logo from '../../assets/Icons/about-logo@3x 1.png';

interface NavigationBarProps {
  icons: string[];
}

const handleIconClick = (index: number) => {
    console.log(`Icon ${index} clicked`); 
  };

const NavigationBar: React.FC<NavigationBarProps> = ({ icons }) => {
    const slicedIcons = icons.slice(1);
    const rightIcons = slicedIcons.map((icon, index) => (
      <StyledIcon key={index} onClick={() => handleIconClick(index)}>
        <img src={icon} alt={`Icon ${index}`} />
      </StyledIcon>
    ));
    return (
        <NavigationContainer>
        <LastStyledIcon onClick={() => handleIconClick(0)}>
              <img src={icons[0]} alt={`Icon 0`} />
            </LastStyledIcon>
          <CenteredContainer>
          <img src={Logo} />         
           </CenteredContainer>
          <RightContainer>
            {rightIcons}
          </RightContainer>
        </NavigationContainer>
      );
    };
    
    export default NavigationBar;

