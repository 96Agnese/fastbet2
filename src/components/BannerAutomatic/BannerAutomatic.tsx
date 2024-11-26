import React from "react";
import { Carousel } from "antd";
import styles from "./BannerAutomatic.module.scss";

const BannerAutomatic: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img className={styles["banner-automatic__img-styles"]} src="/src/assets/banner.png" alt="" />
    </div>
    <div>
      <img
        className={styles["banner-automatic__img-styles"]}
        src="/src/assets/1200x344_200.jpg"
        alt=""
      />
    </div>
    <div>
      <img className={styles["banner-automatic__img-styles"]} src="/src/assets/hq720.jpg" alt="" />
    </div>
  </Carousel>
);

export default BannerAutomatic;
