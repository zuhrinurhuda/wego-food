import { forwardRef, Ref } from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export default forwardRef(function Button(
  { children, className, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button ref={ref} className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
});
