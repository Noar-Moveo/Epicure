import React from "react";
import { ExtensionRestaurantCardProps } from "./Types";
import { Card, Title, Chef } from "./ExtensionRestaurantsCardStyles";

const ExtensionRestaurantCard: React.FC<ExtensionRestaurantCardProps> = ({
  name,
  chef,
}) => (
  <Card>
    <Title>{name}</Title>
    <Chef> {chef}</Chef>
  </Card>
);

export default ExtensionRestaurantCard;
