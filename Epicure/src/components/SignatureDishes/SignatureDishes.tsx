import { useEffect } from "react";
// import { useAppDispatch } from "../../hooks/useFetchData";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const dishes = useSelector(selectDishes);

  useEffect(() => {
    // Initial fetch
    dispatch(fetchDishes()).then(() => {
      console.log("Dishes fetched");
    });

    // Set up polling
    const interval = setInterval(() => {
      dispatch(fetchDishes()).then(() => {
        console.log("Dishes updated");
      });
    }, 10000); // Poll every 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
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
