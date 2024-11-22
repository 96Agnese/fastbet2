import React, { FC } from "react";
import styles from "./CardCategoryMobile.module.scss";
import { RightOutlined } from "@ant-design/icons";

interface CardCategoryMobileProps {
  title: string;
  icon: string;
}

const CardCategoryMobile: FC<CardCategoryMobileProps> = ({ title, icon }) => {
  return (
    <div className={styles["card-category-mobile"]}>
      <div className={styles["card-category-mobile__first"]}>
        <img height={24} src={icon}></img>
        <h3>{title}</h3>
      </div>
      <RightOutlined />
    </div>
  );
};

export default CardCategoryMobile;
