import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Tab.module.scss";

interface TabProps {
  title: string;
  items: string[];
  isOpen: boolean; // Stato per sapere se la tab è aperta
  onClick: () => void; // Funzione per gestire il click
}

const Tab: React.FC<TabProps> = ({ title, items, isOpen, onClick }) => {
  const navigate = useNavigate();

  const handleItemClick = (item: string) => {
    navigate(`/game/${item}`); // Naviga alla pagina del gioco selezionato
  };

  return (
    <div>
      <div
        className={styles["tab"]}
        onClick={onClick}
        style={{
          borderBottom: isOpen ? "2px solid green" : "",
          fontWeight: isOpen ? "bold" : "normal",
          color: isOpen ? "#4eb787" : "black",
        }}
      >
        {title}
      </div>
      {isOpen && (
        <ul style={{ listStyleType: "none", paddingLeft: "8px" }}>
          {items.map((item) => (
            <li
              style={{ paddingBottom: 24, paddingTop: 24 }}
              key={item}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tab;
