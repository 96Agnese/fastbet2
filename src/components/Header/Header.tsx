import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import logogreen from "../../assets/LOGO/Green/logo-verde2.png";

import regal from "../../assets/regal.png";

const Header: React.FC = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [isAccordionGames, setIsAccordionGames] = useState(false);

  const handleLinkClick = () => {
    setOpenMobile(false); // Chiude il menu mobile
    setIsAccordionGames(false); // Chiude l'accordion se aperto
  };

  const toggleAccordion = () => {
    setIsAccordionGames(!isAccordionGames);
  };
  return (
    <header className={styles["header"]}>
      <div className={styles["header__inline-logo"]}>
        <img height={50} src={logogreen} alt="" className={styles["header__logo-desktop"]} />
        <nav className={styles["header__nav"]}>
          <Link
            className={styles["header__link"]}
            to="/items-header/sport"
            onClick={handleLinkClick}
          >
            SPORT
          </Link>
          <Link className={styles["header__link"]} to="/sport-live" onClick={handleLinkClick}>
            SPORT LIVE
          </Link>
          <Link className={styles["header__link"]} to="/slot" onClick={handleLinkClick}>
            SLOT
          </Link>
          <Link className={styles["header__link"]} to="/casino" onClick={handleLinkClick}>
            CASINO
          </Link>
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
          {/* <Toggle isChecked={isDarkMode} onChange={handleToggleChange} /> */}
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

      {/* <Link to="/">Home</Link>

      <Link to="/about">About</Link> */}
    </header>
  );
};

export default Header;
