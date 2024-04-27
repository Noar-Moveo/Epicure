import React from "react";
import {
  Card,
  Title,
  Ingredients,
  Price,
  Icon,
  ILS
} from "./ExtensionDishesCardStyles";
import { ExtensionDishCardProps } from "./Types";
import SpicyIcon from "../../assets/Icons/Spicy.png";
import getSymbolFromCurrency from 'currency-symbol-map'


const ExtensionDishCard: React.FC<ExtensionDishCardProps> = ({
  name,
  ingredients,
  price,
}) => (
  <Card>
    <Title>{name}</Title>
    <Ingredients>{ingredients.join(", ")}</Ingredients>
    <Icon src={SpicyIcon} alt="Spicy" /> 
    <Price> <ILS>{getSymbolFromCurrency("ILS")}</ILS>{price}</Price>
  </Card>
);

export default ExtensionDishCard;
