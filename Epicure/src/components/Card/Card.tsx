import { CardContainer, CardImage } from "./CardStyles";
import { CardItem, CardProps } from "./CardTypes";
import { Fade } from "react-awesome-reveal";

function Card<T extends CardItem>({
  item,
  Component,
  isChefProfile = false,
}: CardProps<T>): JSX.Element {
  console.log("Received item in Card component:", item);

  if (!item || !item.image || !item.name) {
    console.error("Invalid item passed to Card component:", item);
    return <div>Invalid item</div>;
  }

  if (Component) {
    console.log("Rendering Component with props:", item);
  }

  return (
    <Fade>
      <CardContainer>
        <CardImage
          src={item.image}
          alt={item.name}
          isChefProfile={isChefProfile}
        />
        {Component && <Component {...item} />}
      </CardContainer>
    </Fade>
  );
}

export default Card;
