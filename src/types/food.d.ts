export type FoodCategory =
  | "all"
  | "meat"
  | "vegetable"
  | "fish"
  | "fruit"
  | "others";

export type Food = {
  food_id: number;
  name: string;
  category: FoodCategory;
  count: number;
  expiration_date: string;
  created_at: string;
};
