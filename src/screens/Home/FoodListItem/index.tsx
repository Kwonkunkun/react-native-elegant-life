import React from "react";
import { Avatar, Heading, HStack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { Food } from "types/food";

type FoodListItemProps = {
  item: Food;
  handlePressItem: () => void;
};

const FoodListItem = ({ item, handlePressItem }: FoodListItemProps) => {
  return (
    <TouchableOpacity onPress={handlePressItem}>
      <HStack
        padding={"1"}
        space={"2"}
        borderBottomColor="muted.200"
        borderBottomWidth="1"
        alignItems={"center"}
      >
        <Avatar
          size="48px"
          source={{
            uri: "https://picsum.photos/200",
          }}
        />
        <VStack>
          <Heading size="sm">{item.name}</Heading>
          <HStack>
            <Text fontSize="xs">수량: </Text>
            <Text fontSize="xs">{item.count}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xs">유통기한: </Text>
            <Text fontSize="xs">{item.expiration_date}</Text>
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default FoodListItem;
