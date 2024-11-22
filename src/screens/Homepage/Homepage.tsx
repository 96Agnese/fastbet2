import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Homepage.module.scss";
import BannerAutomatic from "../../components/BannerAutomatic/BannerAutomatic";
import NumberCard from "../../components/NumberCard/NumberCard";

const HomePage: React.FC = () => {
  const cardData = [
    {
      imageUrl: "/src/assets/zeus.png",
      title: "Slot Game 1",
      chips: [{ text: "Promozioni", type: "promozioni" }],
    },
    {
      imageUrl: "/src/assets/bonanza.png",
      title: "Slot Game 2",
      chips: [{ text: "Novità", type: "novità" }],
    },
    {
      imageUrl: "/src/assets/play.jpeg",
      title: "Rise of Olympus",
      chips: [{ text: "Esclusiva", type: "esclusive" }],
    },
    {
      imageUrl: "/src/assets/zeus.png",
      title: "Rise of Olympus",
      chips: [{ text: "Promozioni", type: "promozioni" }],
    },
    {
      imageUrl: "/src/assets/amusnetintdropsofwater680_404517.jpg",
      title: "Rise of Olympus",
      chips: [{ text: "Esclusiva", type: "novità" }],
    },
    {
      imageUrl: "/src/assets/play.jpeg",
      title: "Rise of Olympus",
      chips: [{ text: "Esclusiva", type: "esclusive" }],
    },
    {
      imageUrl: "/src/assets/play.jpeg",
      title: "Rise of Olympus",
      chips: [{ text: "Esclusiva", type: "esclusive" }],
    },
    {
      imageUrl: "/src/assets/play.jpeg",
      title: "Rise of Olympus",
      chips: [{ text: "Esclusiva", type: "esclusive" }],
    },
  ];
  return (
    <div className={styles["homepage"]}>
      <BannerAutomatic />
      <h2 className={styles["homepage__title-1"]}>Bonus di benvenuto per te</h2>
      <div className={styles["homepage__inline-carousel-user"]}>
        {cardData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} title={card.title} chips={card.chips} />
        ))}
      </div>
      <div className={styles["homepage__inline-number"]}>
        <NumberCard number={1} img={"/src/assets/bandit.png"} />
        <NumberCard number={2} img={"/src/assets/bandit.png"} />
        <NumberCard number={4} img={"/src/assets/bandit.png"} />
        <NumberCard number={5} img={"/src/assets/bandit.png"} />
        <NumberCard number={6} img={"/src/assets/bandit.png"} />
        <NumberCard number={7} img={"/src/assets/bandit.png"} />
        <NumberCard number={8} img={"/src/assets/bandit.png"} />
      </div>

      <h2 className={styles["homepage__title-2"]}>Esclusive Fastbet</h2>
      <div className={styles["homepage__inline-carousel-esclusive"]}>
        {cardData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} title={card.title} chips={card.chips} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
