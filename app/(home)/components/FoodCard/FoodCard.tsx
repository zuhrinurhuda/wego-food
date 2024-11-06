import Image from "next/image";

import Chip from "@/components/ui/Chip";
import GiftIcon from "@/components/icons/GiftIcon";
import StarIcon from "@/components/icons/StarIcon";

import { Card, CardContent, CardMedia } from "@/components/ui/Card";
import { FoodCardProps, PromotionProps } from "./FoodCard.types";
import styles from "./FoodCard.module.css";

const promotionProps: Record<string, PromotionProps> = {
  gift: {
    content: <GiftIcon />,
    styles: styles.gift,
  },
  "1+1": {
    content: "1+1",
    styles: styles.plus,
  },
  discount: {
    content: "%",
    styles: styles.discount,
  },
};

export default function FoodCard({
  rating,
  promotion,
  isNew,
  minCookTime,
  maxCookTime,
  name,
  imageUrl,
}: FoodCardProps) {
  return (
    <Card>
      <CardMedia>
        <Image
          src={imageUrl}
          alt={name}
          className={styles.images}
          width={600}
          height={600}
        />
        {promotion && (
          <div
            className={`${styles.promotion} ${promotionProps[promotion].styles}`}
          >
            {promotionProps[promotion].content}
          </div>
        )}
      </CardMedia>
      <CardContent>
        <p className={styles.title}>{name}</p>
        <div className={styles.chips}>
          <Chip>
            <StarIcon />
            {Math.floor(rating * 10) / 10}
          </Chip>
          <Chip>{`${minCookTime}-${maxCookTime} min`}</Chip>
          {isNew && <Chip className={styles.new}>New</Chip>}
        </div>
      </CardContent>
    </Card>
  );
}
