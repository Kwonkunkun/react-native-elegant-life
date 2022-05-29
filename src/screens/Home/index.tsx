import React from "react";
import HomeView from "./HomeView";

import useHome from "./useHome";

const HomeScreen = () => {
  const {
    foodListData,
    handlePressItem,
    focusCategoryName,
    handlePressCategoryFilterButton,
  } = useHome();

  return (
    <HomeView
      foodListData={foodListData}
      handlePressItem={handlePressItem}
      focusCategoryName={focusCategoryName}
      handlePressCategoryFilterButton={handlePressCategoryFilterButton}
    />
  );
};

export default HomeScreen;
