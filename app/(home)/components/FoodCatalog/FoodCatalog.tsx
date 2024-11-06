"use client";

import Card from "@/components/ui/Card";
import styles from "./FoodCatalog.module.css";
import { useFood } from "../../context/FoodContext";

export default function FoodCatalog() {
  const { filteredFoods } = useFood();

  return (
    <div className={styles.catalog}>
      {filteredFoods.map((food) => (
        <Card key={food?.id} {...food} />
      ))}
    </div>
  );
}
