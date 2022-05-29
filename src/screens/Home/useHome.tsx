import { useState } from "react";
import { FoodCategory } from "types/food";
import MOCK_DATA from "./mock";

const useHome = () => {
  const foodListData = MOCK_DATA;
  const [focusCategoryName, setFocusCategoryName] =
    useState<FoodCategory>("all");

  const handlePressCategoryFilterButton = (itemCategory: FoodCategory) => {
    setFocusCategoryName(itemCategory);
  };
  const handlePressItem = () => {};

  return {
    foodListData,
    handlePressItem,
    focusCategoryName,
    handlePressCategoryFilterButton,
  };
};

export default useHome;
