"use client";

import { useState } from "react";

import ButtonGroup from "@/components/ui/ButtonGroup";
import styles from "@/components/ui/ButtonGroup/ButtonGroup.module.css";
import Button from "@/components/ui/Button";

import { FoodFilterProps } from "./FoodFilter.types";

export default function FoodFilter({ categories }: FoodFilterProps) {
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  return (
    <ButtonGroup>
      {categories.map(({ id, name }, index) => (
        <Button
          key={id}
          className={isActiveIndex === index ? styles.active : ""}
          onClick={() => setIsActiveIndex(index)}
        >
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );
}
