import React from "react";
import styles from "./NumberCard.module.scss";

interface NumberCardProps {
  number: number; // Il numero da visualizzare
  img: string; // Contenuto della card
}

const NumberCard: React.FC<NumberCardProps> = ({ number, img }) => {
  return (
    <div className={styles.numberCard}>
      <p className={styles.number}>{number}</p>
      <img src={img} className={styles.card}></img>
    </div>
  );
};

export default NumberCard;
