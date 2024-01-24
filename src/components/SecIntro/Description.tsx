import React, { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Description.module.scss";

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const Description: FC<DescriptionProps> = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};
