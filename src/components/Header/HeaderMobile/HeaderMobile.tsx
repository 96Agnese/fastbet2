import { useState } from "react";
import Button from "../../Button/Button";
import styles from "./HeaderMobile.module.scss";
import regal from "../../../assets/regal.png";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Toggle from "../../Toggle/Toggle";
import Tab2 from "../../Tab2/Tab2";

const HeaderMobile = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const toggleMenu = () => {
    setOpenMobile(!openMobile);
  };
  return (
    <div className={styles["header-mobile"]}>
      <div className={styles["header-mobile__inline"]}>
        {openMobile ? (
          <CloseOutlined
            className={styles["header-mobile__icon"]}
            height={32}
            width={32}
            onClick={(event) => {
              event.stopPropagation();
              toggleMenu();
            }}
          />
        ) : (
          <MenuOutlined
            className={styles["header-mobile__icon"]}
            height={32}
            width={32}
            onClick={(event) => {
              event.stopPropagation();
              toggleMenu(); // Gestisci il clic sull'icona
            }}
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
              <Toggle />
              <img height={24} width={24} src="/src/assets/moon.png" alt="" />
              <div className={styles["header-mobile__setting-icon"]}>
                <img height={24} width={24} src="/src/assets/settings.png" alt="" />
              </div>
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
            <Tab2 />
            {/* <TabsItems /> */}
          </div>
        )}
        <img
          className={styles["header-mobile__size-logo"]}
          height={50}
          src="/src/assets/LOGO/Green/logo-verde2.png"
          alt=""
        />
        <Button size="small" variant="outlined" title={"ciaooo"}>
          ACCEDI
        </Button>

        {/* <UserOutlined height={40} width={40} /> */}
      </div>
      {/* <div className={styles["header-mobile__inline-btn"]}>
        <Button size="large" variant="outlined" title={"ciaooo"}>
          ACCEDI
        </Button>
        <Button size="large" variant="secondary" title={"ciaooo"}>
          REGISTRATI
        </Button>
      </div> */}
    </div>
  );
};

export default HeaderMobile;
