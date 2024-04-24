import Carousel from "../Carousel/Carousel";
import ExtensionDishCard from "../ExtensionDishesCard/ExtensionDishesCard";
import { RootState } from "../../state/store";
import { Dish } from "../../data/State/StateTypes";
import { SignatureDishesContainer } from "./SignatureDishesStyles";
import { title_SignatureDish } from "../../data/resources";

const selectDishes = (state: RootState) => state.dishes.value;
function SignatureDishes() {
  return (
    <SignatureDishesContainer>
      <Carousel<Dish>
        title={title_SignatureDish}
        CardComponent={ExtensionDishCard}
        dataSelector={selectDishes}
      />
    </SignatureDishesContainer>
  );
}

export default SignatureDishes;
