import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useFetchData";
import { useSelector } from "react-redux";
import { fetchDishes } from "../../state/features/dishes/dishesSlice";
import Carousel from "../Carousel/Carousel";
import ExtensionDishCard from "../ExtensionDishesCard/ExtensionDishesCard";
import { RootState } from "../../state/store";
import { Dish } from "../../data/State/StateTypes";
import { SignatureDishesContainer } from "./SignatureDishesStyles";
import { title_SignatureDish } from "../../data/resources";

const selectDishes = (state: RootState) =>
  state.dishes.value.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    ingredients: item.ingredients,
    tags: item.tags,
    status: item.status,
    image: item.image,
    restaurant: item.restaurant,
  }));

function SignatureDishes() {
  const dispatch = useAppDispatch();
  const dishes = useSelector((state: RootState) => state.restaurants.value);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  console.log("Dishes from state:", dishes);
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
