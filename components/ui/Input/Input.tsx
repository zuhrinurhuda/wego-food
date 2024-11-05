"use client";

import React, { forwardRef, Ref, useRef } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.types";

export default forwardRef(function Input(
  { startIcon, className, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnFocus = () => inputRef.current?.focus();

  return (
    <div
      ref={ref}
      className={`${styles.container} ${className}`}
      onClick={handleOnFocus}
    >
      {startIcon}
      <input ref={inputRef} className={styles.input} {...props} />
    </div>
  );
});
