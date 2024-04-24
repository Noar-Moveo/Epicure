import React from "react";
import { ExtensionChefRestaurantCardProps } from "./Types";
import { Card, Title } from "./ExtensionChefRestaurantCardStyles";

const ExtensionChefRestaurantCard: React.FC<
  ExtensionChefRestaurantCardProps
> = ({ name }) => (
  <Card>
    <Title>{name}</Title>
  </Card>
);

export default ExtensionChefRestaurantCard;
