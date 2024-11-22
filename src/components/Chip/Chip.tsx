import React from "react";
import { Tag } from "antd";
import styles from "./Chip.module.scss";
interface ChipProps {
  text: string; // Testo che sarà mostrato nel chip
  type: "promozioni" | "novità" | "esclusive"; // Tipo per determinare il colore
}

const Chip: React.FC<ChipProps> = ({ text, type }) => {
  let color: string;

  switch (type) {
    case "promozioni":
      color = "#52B689";
      break;
    case "novità":
      color = "#F8C326";
      break;
    case "esclusive":
      color = "#BB08F8";
      break;
    default:
      color = "default";
  }

  return (
    <Tag color={color} className={styles["chip"]}>
      {text}
    </Tag>
  );
};

export default Chip;
