import { CardContainer, CardImage } from "./CardStyles";
import { CardItem, CardProps } from "./CardTypes";
import { Fade } from 'react-awesome-reveal';


function Card<T extends CardItem>({
  item,
  Component,
  isChefProfile = false,
}: CardProps<T>): JSX.Element {
  console.log(isChefProfile);
  return (
    <Fade >
    <CardContainer>
      <CardImage
        src={item.imageUrl}
        alt={item.name}
        isChefProfile={isChefProfile}
      />
      <Component {...item} />
    </CardContainer>
    </Fade>
  );
}

export default Card;
