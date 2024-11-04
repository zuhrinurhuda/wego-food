"use client";

import { forwardRef, Ref, useState } from "react";
import { TabsProps } from "./Tabs.types";
import styles from "./Tabs.module.css";

export default forwardRef(function Card(
  { tabs }: TabsProps,
  ref: Ref<HTMLDivElement>
) {
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  return (
    <div ref={ref} className={styles.tabs}>
      {tabs.map(({ id, name }, index) => (
        <button
          key={id}
          className={`${styles.tab} ${
            isActiveIndex === index ? styles.active : ""
          }`}
          onClick={() => setIsActiveIndex(index)}
        >
          {name}
        </button>
      ))}
    </div>
  );
});
