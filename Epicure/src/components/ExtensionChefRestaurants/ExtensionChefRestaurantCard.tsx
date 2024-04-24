import React from "react";
import { ExtensionChefRestaurantCardProps } from "./Types";
import { Card, Title } from "./ExtensionChefRestaurantCardStyles";

const ExtensionRestaurantCard: React.FC<ExtensionChefRestaurantCardProps> = ({
  name,
  isChefProfile = false,
}) => (
  <Card className={isChefProfile ? "chefProfile" : ""}>
    <Title>{name}</Title>
  </Card>
);

export default ExtensionRestaurantCard;
