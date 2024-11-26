import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "outlined";
  size?: "small" | "medium" | "large";
  border?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  border = false,
  onClick,
  children,
  title,
  icon,
  iconPosition = "left",
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${
    border ? styles.bordered : ""
  }`;

  return (
    <button title={title} className={buttonClass} onClick={onClick}>
      {icon && iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
