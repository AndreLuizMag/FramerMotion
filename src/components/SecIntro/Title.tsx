import React, { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Title.module.scss";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
