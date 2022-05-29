import React from "react";
import { Button, HStack, ScrollView } from "native-base";
import { FoodCategory } from "types/food";

const foodCategoryList: FoodCategory[] = [
  "all",
  "vegetable",
  "fish",
  "fruit",
  "meat",
  "others",
];

type CategoryFilterBlockProps = {
  focusCategoryName: FoodCategory;
  handlePressCategoryFilterButton: (itemCategory: FoodCategory) => void;
};

const CategoryFilterBlock = ({
  focusCategoryName,
  handlePressCategoryFilterButton,
}: CategoryFilterBlockProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} height="16">
      <HStack space={2}>
        {foodCategoryList.map((item) => (
          <Button
            key={item}
            onPress={() => {
              handlePressCategoryFilterButton(item);
            }}
            variant={focusCategoryName === item ? "solid" : "outline"}
            borderRadius="pill"
            colorScheme="success"
            rounded={"2xl"}
          >
            {item}
          </Button>
        ))}
      </HStack>
    </ScrollView>
  );
};

export default CategoryFilterBlock;
