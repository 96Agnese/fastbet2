import React from "react";
import Chip from "../Chip/Chip"; // Assicurati che il path sia corretto
import styles from "./Card.module.scss"; // Aggiungi il path corretto se necessario
import { HeartOutlined } from "@ant-design/icons";

interface ChipData {
  text: string;
  type: "promozioni" | "novità" | "esclusive"; // Tipi di chip
}

interface CardProps {
  imageUrl: string;
  title: string;
  chips: ChipData[]; // Lista di chip per ciascuna card
}

const Card: React.FC<CardProps> = ({ imageUrl, title, chips }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
        <HeartOutlined className={styles.heartIcon} />
        {chips.map((chip, index) => (
          <Chip key={index} text={chip.text} type={chip.type} />
        ))}
      </div>
      <div className={styles.cardTitle}>
        <p className={styles.titleCard}>{title}</p>
      </div>
    </div>
  );
};

export default Card;
