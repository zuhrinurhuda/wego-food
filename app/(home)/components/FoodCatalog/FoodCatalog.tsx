"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";

import FoodCard from "../FoodCard";
import styles from "./FoodCatalog.module.css";
import { useFood } from "../../context/FoodContext";

export default function FoodCatalog() {
  const { filteredFoods } = useFood();
  const [dataToShow, setDataToShow] = useState(9);

  const handleShowMore = () => setDataToShow((prevValue) => prevValue + 9);

  return (
    <section id="food-catalog" className={styles.container}>
      <div className={styles.catalog}>
        {filteredFoods.slice(0, dataToShow).map((food) => (
          <FoodCard key={food?.id} {...food} />
        ))}
      </div>
      <Button className={styles.button} onClick={handleShowMore}>
        + Show More
      </Button>
    </section>
  );
}
