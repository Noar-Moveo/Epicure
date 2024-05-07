import React from "react";
import { ExtensionRestaurantCardProps } from "./Types";
import { Card, Title, Chef, Stars } from "./ExtensionRestaurantsCardStyles";

const ExtensionRestaurantCard: React.FC<ExtensionRestaurantCardProps> = ({
  name,
  chef,
  stars,
}) => (
  <Card>
    <Title>{name}</Title>
    <Chef>{chef.name}</Chef>
    { <Stars src={stars} alt="Restaurant Rating Stars" />}
  </Card>
);

export default ExtensionRestaurantCard;
