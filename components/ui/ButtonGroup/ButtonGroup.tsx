import { forwardRef, Ref } from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";
import styles from "./ButtonGroup.module.css";

export default forwardRef(function ButtonGroup(
  { children }: ButtonGroupProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={styles.buttonGroup}>
      {children}
    </div>
  );
});
