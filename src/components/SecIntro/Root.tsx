import React, { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Root.module.scss";

interface RootProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Root: FC<RootProps> = ({ children }) => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
