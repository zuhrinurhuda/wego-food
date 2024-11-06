import { forwardRef, Ref } from "react";
import { ChipProps } from "./Chip.types";
import styles from "./Chip.module.css";

export default forwardRef(function Chip(
  { children, className }: ChipProps,
  ref: Ref<HTMLSpanElement>
) {
  return (
    <span ref={ref} className={`${styles.chip} ${className}`}>
      {children}
    </span>
  );
});
