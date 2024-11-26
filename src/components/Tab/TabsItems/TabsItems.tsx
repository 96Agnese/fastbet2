import React, { useState } from "react";
import styles from "./TabsItems.module.scss";
import Tab from "../Tab";

const TabsItems: React.FC = () => {
  const tabs = [
    { title: "Sport", items: ["Calcio", "Basket", "Tennis"] },
    { title: "Casino", items: ["Roulette", "Blackjack", "Slot"] },
    { title: "Casino Live", items: ["Live Roulette", "Live Blackjack"] },
    { title: "Altri Giochi", items: ["Gioco 1", "Gioco 2", "Gioco 3"] },
  ];

  const [openTabIndex, setOpenTabIndex] = useState<number | null>(null); // Stato per tenere traccia della tab aperta

  const handleTabClick = (index: number) => {
    setOpenTabIndex(openTabIndex === index ? null : index); // Chiude la tab se è già aperta, altrimenti apre quella selezionata
  };

  return (
    <div className={styles["tabs-items"]}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          items={tab.items}
          isOpen={openTabIndex === index}
          onClick={() => handleTabClick(index)}
        />
      ))}
    </div>
  );
};

export default TabsItems;
