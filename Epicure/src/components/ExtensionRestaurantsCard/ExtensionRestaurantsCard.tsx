import React from "react";
import { ExtensionRestaurantCardProps } from "./Types";
import { Card, Title, Chef, Stars } from "./ExtensionRestaurantsCardStyles";

const ExtensionRestaurantCard: React.FC<ExtensionRestaurantCardProps> = ({
  name,
  chef,
  starsImage,
}) => (
  <Card>
    <Title>{name}</Title>
    <Chef>{chef.name}</Chef>
    {starsImage && <Stars src={starsImage} alt="Restaurant Rating Stars" />}
  </Card>
);

export default ExtensionRestaurantCard;
