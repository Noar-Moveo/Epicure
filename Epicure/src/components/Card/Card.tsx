import { CardContainer, CardImage } from "./CardStyles";
import { CardItem, CardProps } from "./CardTypes";

function Card<T extends CardItem>({
  item,
  Component,
  isChefProfile = false,
}: CardProps<T>): JSX.Element {
  console.log(isChefProfile);
  return (
    <CardContainer>
      <CardImage
        src={item.imageUrl}
        alt={item.name}
        isChefProfile={isChefProfile}
      />
      <Component {...item} />
    </CardContainer>
  );
}

export default Card;
