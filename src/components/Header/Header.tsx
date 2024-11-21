import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import logogreen from "../../assets/LOGO/Green/logo-verde2.png";

import regal from "../../assets/regal.png";
import Toggle from "../Toggle/Toggle";

const Header: React.FC = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [isAccordionGames, setIsAccordionGames] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleChange = (checked: boolean) => {
    setIsDarkMode(checked);
    console.log("Dark Mode:", checked ? "On" : "Off");
  };

  const handleLinkClick = () => {
    setOpenMobile(false);
    setIsAccordionGames(false);
  };

  const toggleAccordion = () => {
    setIsAccordionGames(!isAccordionGames);
  };

  const data = [
    {
      label: "SPORT",
      to: "/sport",
    },
    {
      label: "SPORT LIVE",
      to: "/sport-live",
    },
    {
      label: "SLOT",
      to: "/casino",
    },
    {
      label: "CASINO",
      to: "/sport",
    },
  ];
  return (
    <header className={styles["header"]}>
      <div className={styles["header__inline-logo"]}>
        <img height={50} src={logogreen} alt="" className={styles["header__logo-desktop"]} />
        <nav className={styles["header__nav"]}>
          {data.map((item) => (
            <Link className={styles["header__link"]} to={item.to} onClick={handleLinkClick}>
              {item.label}
            </Link>
          ))}

          <div className={styles["header__link"]} onClick={toggleAccordion}>
            ALTRI GIOCHI
          </div>
          <Button
            iconPosition="left"
            icon={<img src={regal} />}
            size="large"
            variant="primary"
            title={"PROMOZIONI"}
          >
            PROMOZIONI
          </Button>
          <Toggle isChecked={isDarkMode} onChange={handleToggleChange} />
        </nav>
      </div>

      <div className={styles["header__inline-btns-desktop"]}>
        <Button variant="outlined" size="medium" title={"LOGIN"}>
          LOGIN
        </Button>

        <Button variant="secondary" size="medium" title={"REGISTRAZIONE"}>
          REGISTRAZIONE
        </Button>
      </div>

      {isAccordionGames && (
        <div className={`${styles["header__accordion"]}`}>
          <Link className={styles["header__link-mobile"]} to="/game1" onClick={handleLinkClick}>
            Gioco 1
          </Link>
          <Link className={styles["header__link-mobile"]} to="/game2" onClick={handleLinkClick}>
            Gioco 2
          </Link>
          <Link className={styles["header__link-mobile"]} to="/game3" onClick={handleLinkClick}>
            Gioco 3
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
