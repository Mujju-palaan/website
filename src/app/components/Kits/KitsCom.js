import React from "react";
import styles from "./style.module.css"; 
import { FcRight } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";

const KitsCom = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <img className={styles.imgsize} src={props.image}></img>
        <h2>{props.title}</h2>
        <Link href={`/${props.link}`} onClick={() => setOpenMenu(false)}>
          <div className={styles.explore}>
            <h3>Try Now</h3>
            <FcRight style={{ fontSize: "2rem" }} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default KitsCom;
