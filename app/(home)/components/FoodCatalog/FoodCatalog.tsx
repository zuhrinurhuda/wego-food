"use client";

import Card from "@/components/ui/Card";
import { FoodCatalogProps } from "./FoodCatalog.types";
import styles from "./FoodCatalog.module.css";

export default function FoodCatalog({ cards }: FoodCatalogProps) {
  return (
    <div className={styles.catalog}>
      {cards.map((card) => (
        <Card key={card?.id} {...card} />
      ))}
    </div>
  );
}
