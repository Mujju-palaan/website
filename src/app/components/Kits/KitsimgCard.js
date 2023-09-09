import React from "react";
import styles from "./style.module.css";
import { FcRight } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";

const KitsimgCard = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={styles.container1}>
        <img className={styles.imgsize1} src={props.image}></img>
        <h2>{props.title}</h2>
      </div>
    </>
  );
};

export default KitsimgCard;
