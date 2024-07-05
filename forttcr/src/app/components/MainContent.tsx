import React from "react";
import styles from "./MainContent.module.css";
import Link from "next/link";

export default function MainContent() {
  return (
    <>
    <div className={styles.imgbackground}>
      <h1 className={styles.content}>
        CONSTRUÇÃO <br/>
        É A ARTE DE COMO <br/>
        GASTAR ESPAÇO.
      </h1>
        <Link href={"/gallery"} className={styles.saibamais}>SAIBA MAIS</Link>
    </div>
    </>
  );
};
