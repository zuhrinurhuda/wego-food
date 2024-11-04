"use client";

import { forwardRef, Ref } from "react";
import Image from "next/image";
import { CardProps } from "./Card.types";
import styles from "./Card.module.css";

export default forwardRef(function Card(
  {
    // id,
    // index,
    // rating,
    // promotion,
    // isNew,
    // categoryId,
    // minCookTime,
    // maxCookTime,
    // restaurant,
    name,
    imageUrl,
  }: CardProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={styles.card}>
      <Image
        src={imageUrl}
        alt={name}
        className={styles.images}
        width={600}
        height={600}
      />
      <div className={styles.content}>{name}</div>
    </div>
  );
});
