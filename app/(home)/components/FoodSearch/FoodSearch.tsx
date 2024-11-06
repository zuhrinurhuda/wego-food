"use client";

import { ChangeEvent, useCallback } from "react";

import SearchIcon from "@/components/icons/SearchIcon";
import Input from "@/components/ui/Input/Input";

import styles from "./FoodSearch.module.css";
import { useFood } from "../../context/FoodContext";

export default function FoodSearch() {
  const { foods, setFilteredFoods } = useFood();

  const handleOnSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const searchQuery = e.target.value.toLowerCase();
      const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(searchQuery)
      );

      setFilteredFoods(filteredFoods);
    },
    [foods, setFilteredFoods]
  );

  return (
    <Input
      type="text"
      placeholder="Enter restaurant name..."
      startIcon={<SearchIcon />}
      className={styles.search}
      onChange={handleOnSearch}
    />
  );
}
