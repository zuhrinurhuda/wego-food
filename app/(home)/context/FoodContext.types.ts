import { Food, Categories } from "../page.types";

export interface FoodContextType {
  foods: Food[];
  categories: Categories;
  filteredFoods: Food[];
  setFilteredFoods: React.Dispatch<React.SetStateAction<Food[]>>;
}

export interface InitialState {
  foods: Food[];
  categories: Categories;
}

export interface FoodProviderProps {
  children: React.ReactNode;
  initialState: InitialState;
}
