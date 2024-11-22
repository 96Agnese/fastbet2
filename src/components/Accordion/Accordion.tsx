import React, { useState } from "react";
import { AppleOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

type ExpandIconPosition = "start" | "end";

const Accordion: React.FC = () => {
  const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>("end");

  const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  //   const genExtra = () => (
  //     <DownOutlined
  //       onClick={(event) => {
  //         event.stopPropagation();
  //       }}
  //     />
  //   );

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <h2 style={{ color: "white" }}>Fastbet.it</h2>,
      children: (
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <p>Chi siamo</p>
          <p>Fastbet.news</p>
          <p>Fastpay.it</p>
          <p>Casino</p>
          <p>Casino Live</p>
        </div>
      ),
      //   extra: <AppleOutlined style={{ color: "white" }} />,
    },
    {
      key: "2",
      label: <h2 style={{ color: "white" }}>Giochi</h2>,
      children: (
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <p>Sport</p>
          <p>Live</p>
          <p>Slot</p>
          <p>Casino</p>
          <p>Casino Live</p>
          <p>Poker</p>
          <p>Card Game</p>
          <p>Virtual</p>
          <p>Ippica</p>
          <p>Totocalcio</p>
          <p>Biango</p>
          <p>Lotterie</p>
        </div>
      ),
      //   extra: genExtra(),
    },
    {
      key: "3",
      label: <h2 style={{ color: "white" }}>Regolamenti</h2>,
      children: (
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <p>Gioco responsabile</p>
          <p>Termini e Condizioni </p>
          <p>Normativa</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Gestione Cookie</p>
          <p>Contratto di Gioco</p>
        </div>
      ),
      //   extra: genExtra(),
    },
    {
      key: "4",
      label: <h2 style={{ color: "white" }}>Assistenza</h2>,
      children: (
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <p>Assistenza</p>
          <p>FAQ</p>
          <p>Regolamento scommesse</p>
          <p>Bonus Scommessse </p>
        </div>
      ),
      //   extra: genExtra(),
    },
  ];

  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        items={items}
        bordered={false}
        style={{ backgroundColor: "transparent" }}
      />
    </>
  );
};

export default Accordion;
