import { CardContentProps, CardMediaProps, CardProps } from "./Card.types";
import styles from "./Card.module.css";

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export const CardMedia = ({ children }: CardMediaProps) => {
  return <div className={styles.media}>{children}</div>;
};

export const CardContent = ({ children }: CardContentProps) => {
  return <div className={styles.content}>{children}</div>;
};
