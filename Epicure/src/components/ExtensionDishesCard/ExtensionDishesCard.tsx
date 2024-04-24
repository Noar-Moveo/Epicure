import React from "react";
import {
  Card,
  Title,
  Ingredients,
  Price,
  Icon,
} from "./ExtensionDishesCardStyles";
import { ExtensionDishCardProps } from "./Types";
import SpicyIcon from "../../assets/Icons/Spicy.png";

const ExtensionDishCard: React.FC<ExtensionDishCardProps> = ({
  name,
  ingredients,
  price,
}) => (
  <Card>
    <Title>{name}</Title>
    <Ingredients>{ingredients.join(", ")}</Ingredients>
    <Icon src={SpicyIcon} alt="Spicy" /> <Price>₪{price}</Price>
  </Card>
);

export default ExtensionDishCard;
