import React, { useState } from "react";
import Button from "../../Button/Button";
import styles from "./HeaderMobile.module.scss";
import menugreen from "../../../assets/menu-green.png";
import closegreen from "../../../assets/close-green.png";
import regal from "../../../assets/regal.png";
import TabsItems from "../../Tab/TabsItems/TabsItems";

const HeaderMobile = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 720); // Stato per rilevare la larghezza del dispositivo

  const toggleMenu = () => {
    setOpenMobile(!openMobile);
  };
  return (
    <div className={styles["header-mobile"]}>
      <div className={styles["header-mobile__inline"]}>
        {openMobile ? (
          <img
            className={styles["header-mobile__icon"]}
            onClick={toggleMenu}
            src={closegreen}
            alt="Close Menu"
            height={32}
            width={32}
          />
        ) : (
          <img
            className={styles["header-mobile__icon"]}
            onClick={toggleMenu}
            src={menugreen}
            alt="Open Menu"
            height={32}
            width={32}
          />
        )}

        {openMobile && (
          <div
            className={`${styles["header-mobile__container-mobile"]} ${
              openMobile ? styles.open : ""
            }`}
          >
            <div className={styles["header-mobile__inline-icon-theme"]}>
              <h3>Tema</h3>
              <img height={24} width={24} src="/src/assets/sun.png" alt="" />
              <img height={24} width={24} src="/src/assets/moon.png" alt="" />
              <img height={24} width={24} src="/src/assets/settings.png" alt="" />
            </div>

            <Button
              icon={<img src={regal} />}
              iconPosition="left"
              size="large"
              variant="primary"
              title={"PROMOZIONI"}
            >
              PROMOZIONI
            </Button>
            <TabsItems />
          </div>
        )}
        <img height={50} src="/src/assets/LOGO/Green/logo-verde2.png" alt="" />
        <img height={32} width={32} src="/src/assets/user.png" alt="" />
      </div>
      <div className={styles["header-mobile__inline-btn"]}>
        <Button size="large" variant="outlined" title={"ciaooo"}>
          ACCEDI
        </Button>
        <Button size="large" variant="secondary" title={"ciaooo"}>
          REGISTRATI
        </Button>
      </div>
    </div>
  );
};

export default HeaderMobile;
