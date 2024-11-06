"use client";

import { useCallback, useState } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import styles from "./FoodCatalog.module.css";
import { useFood } from "../../context/FoodContext";

export default function FoodCatalog() {
  const { filteredFoods } = useFood();
  const [dataToShow, setDataToShow] = useState(9);
  const [visibleData, setVisibleData] = useState(filteredFoods.slice(0, 9));

  const handleShowMore = useCallback(() => {
    const newDataToShow = dataToShow + 9;
    setVisibleData(filteredFoods.slice(0, newDataToShow));
    setDataToShow(newDataToShow);
  }, [dataToShow, filteredFoods]);

  return (
    <>
      <div className={styles.catalog}>
        {visibleData.map((food) => (
          <Card key={food?.id} {...food} />
        ))}
      </div>
      <Button className={styles.button} onClick={handleShowMore}>
        + Show More
      </Button>
    </>
  );
}
