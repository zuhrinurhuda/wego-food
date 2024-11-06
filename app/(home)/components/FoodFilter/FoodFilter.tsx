"use client";

import { useCallback, useState } from "react";

import ButtonGroup from "@/components/ui/ButtonGroup";
import styles from "@/components/ui/ButtonGroup/ButtonGroup.module.css";
import Button from "@/components/ui/Button";

import { useFood } from "../../context/FoodContext";

export default function FoodFilter() {
  const { categories, foods, setFilteredFoods } = useFood();
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  const handleOnFilter = useCallback(
    (index: number) => {
      const filteredFoods = foods.filter(
        (food) => food.categoryId === categories[index].id
      );

      setFilteredFoods(categories[index].id === "all" ? foods : filteredFoods);
      setIsActiveIndex(index);
    },
    [categories, foods, setFilteredFoods]
  );

  return (
    <section id="food-filter">
      <ButtonGroup>
        {categories.map(({ id, name }, index) => (
          <Button
            key={id}
            className={isActiveIndex === index ? styles.active : ""}
            onClick={() => handleOnFilter(index)}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>
    </section>
  );
}
