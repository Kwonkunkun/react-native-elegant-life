import { FlatList, Input, VStack } from "native-base";
import React from "react";
import { Food, FoodCategory } from "types/food";
import CategoryFilterBlock from "./CategoryFilterBlock";
import FoodListItem from "./FoodListItem";

type HomeViewProps = {
  foodListData: Food[];
  handlePressItem: () => void;
  focusCategoryName: FoodCategory;
  handlePressCategoryFilterButton: (itemCategory: FoodCategory) => void;
};

const HomeView = ({
  foodListData,
  handlePressItem,
  focusCategoryName,
  handlePressCategoryFilterButton,
}: HomeViewProps) => {
  return (
    <VStack space="3" flex={1}>
      <Input variant="outline" placeholder="Outline" />
      <CategoryFilterBlock
        focusCategoryName={focusCategoryName}
        handlePressCategoryFilterButton={handlePressCategoryFilterButton}
      />
      <FlatList
        data={foodListData}
        renderItem={({ item }) => {
          return <FoodListItem item={item} handlePressItem={handlePressItem} />;
        }}
      />
    </VStack>
  );
};

export default HomeView;
