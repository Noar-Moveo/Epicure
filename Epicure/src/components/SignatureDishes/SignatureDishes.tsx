import Carousel from "../Carousel/Carousel";
import ExtensionDishCard from "../ExtensionDishesCard/ExtensionDishesCard";
import { RootState } from "../../state/store";
import { Dish } from "../../data/State/StateTypes";
import { Title, SignatureDishesContainer } from "./SignatureDishesStyles";

const selectDishes = (state: RootState) => state.dishes.value;

function SignatureDishes() {
  return (
    <SignatureDishesContainer>
      <Title>Signature Dish Of:</Title>
      <Carousel<Dish>
        CardComponent={ExtensionDishCard}
        dataSelector={selectDishes}
      />
    </SignatureDishesContainer>
  );
}

export default SignatureDishes;
