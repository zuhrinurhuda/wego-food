"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { FoodContextType, FoodProviderProps } from "./FoodContext.types";
import { Food } from "../page.types";

export const FoodContext = createContext<FoodContextType | null>(null);

export const useFood = () => {
  const context = useContext(FoodContext);

  if (!context) {
    throw new Error("useFood must be used within a FoodProvider");
  }

  return context;
};

export const FoodProvider = ({ children, initialState }: FoodProviderProps) => {
  const [filteredFoods, setFilteredFoods] = useState<Food[]>(
    initialState.foods
  );

  const value = useMemo<FoodContextType>(
    () => ({
      foods: initialState.foods,
      categories: initialState.categories,
      filteredFoods,
      setFilteredFoods,
    }),
    [
      initialState.foods,
      initialState.categories,
      filteredFoods,
      setFilteredFoods,
    ]
  );

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
