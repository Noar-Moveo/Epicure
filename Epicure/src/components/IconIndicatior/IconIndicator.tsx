import Spicy from "../../assets/Icons/Spicy.png";
import Vegitarian from "../../assets/Icons/Veg.png";
import Vegan from "../../assets/Icons/Vegan.png";
import {
  IconIndicatorContainer,
  IconContainer,
  Title,
  Icon,
  Text,
  Icons_,
} from "./IconIndicatorStyles";
import { title_IconIndicator } from "../../data/resources";

function IconIndicator() {
  return (
    <IconIndicatorContainer>
      <Title>{title_IconIndicator}</Title>
      <Icons_>
        <IconContainer>
          <Icon src={Spicy} alt="Spicy Icon" />
          <Text>Spicy</Text>
        </IconContainer>
        <IconContainer>
          <Icon src={Vegitarian} alt="Vegetarian Icon" />
          <Text>Vegetarian</Text>
        </IconContainer>
        <IconContainer>
          <Icon src={Vegan} alt="Vegan Icon" />
          <Text>Vegan</Text>
        </IconContainer>
      </Icons_>
    </IconIndicatorContainer>
  );
}

export default IconIndicator;
