import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import CardCategoryMobile from "../CardCategoryMobile/CardCategoryMobile";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Sport",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CardCategoryMobile title="Sport Prematch" icon="/src/assets/soccer-ball-variant.png" />
        <CardCategoryMobile title="Ippica" icon="/src/assets/horseshoe.png" />
        <CardCategoryMobile title="Virtual" icon="/src/assets/letter-v.png" />
      </div>
    ),
  },
  {
    key: "2",
    label: "Casino",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CardCategoryMobile title="Tutti i giochi" icon="/src/assets/board-game.png" />
        <CardCategoryMobile title="Novità" icon="/src/assets/news.png" />
        <CardCategoryMobile title="Slot Machine" icon="/src/assets/letter-v.png" />
        <CardCategoryMobile title="Jackpot" icon="/src/assets/letter-v.png" />
        <CardCategoryMobile title="Giochi da tavolo" icon="/src/assets/letter-v.png" />
      </div>
    ),
  },
  {
    key: "3",
    label: "Casino Live",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CardCategoryMobile title="Roulette" icon="/src/assets/roulette-wheel.png" />
        <CardCategoryMobile title="Blackjack" icon="/src/assets/slot-machine.png" />
        <CardCategoryMobile title="Altri giochi" icon="/src/assets/letter-v.png" />
      </div>
    ),
  },
  {
    key: "4",
    label: "Altri giochi",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CardCategoryMobile title="Tutti i giochi" icon="/src/assets/soccer-ball-variant.png" />
        <CardCategoryMobile title="Novità" icon="/src/assets/horseshoe.png" />
        <CardCategoryMobile title="Slot Machine" icon="/src/assets/letter-v.png" />
        <CardCategoryMobile title="Jackpot" icon="/src/assets/letter-v.png" />
        <CardCategoryMobile title="Giochi da tavolo" icon="/src/assets/letter-v.png" />
      </div>
    ),
  },
];

const Tab2: React.FC = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Tab2;
