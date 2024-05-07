import React from "react";
import {
  Card,
  TitleContainer,
  Title,
  TitleWithBreak,
  Ingredients,
  Price,
  Icon,
  ILS
} from "./ExtensionDishesCardStyles";
import { ExtensionDishCardProps } from "./Types";
import SpicyIcon from "../../assets/Icons/Spicy.png";
import getSymbolFromCurrency from 'currency-symbol-map';

const ExtensionDishCard: React.FC<ExtensionDishCardProps> = ({
  name,
  ingredients,
  price,
}) => {
  const words = name.split(' ');
  const firstWord = words[0];
  const remainingWords = words.slice(1).join(' ');

  return (
    <Card>
      <TitleContainer>
        <Title>{name}</Title>
        <TitleWithBreak>{firstWord}<br/>{remainingWords}</TitleWithBreak>
      </TitleContainer>
      <Ingredients>{ingredients.join(", ")}</Ingredients>
      <Icon src={SpicyIcon} alt="Spicy" />
      <Price><ILS>{getSymbolFromCurrency("ILS")}</ILS>{price}</Price>
    </Card>
  );
};

export default ExtensionDishCard;
