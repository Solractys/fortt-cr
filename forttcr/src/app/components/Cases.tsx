import React from "react";
import Link from "next/link";
import styles from "./Cases.module.css";
import Image from "next/image";
import imgSub from "../../../public/imgSub.png";

export default function Cases() {
  return(
    <section className={styles.sectionCase}>
    <div className={styles.titleCases}>
      <h1>
        REFORMAS, APROVEITO DE <br/>
        ESPAÇO, INOVAÇÕES, <br/>
        DENTRE OUTROS SERVIÇOS 
        </h1>
        <Link href="/casos" className={styles.buttonCase}>CONHEÇA OS CASOS</Link>
    </div>
      <div>
        <Image width={300} className={styles.useCaseImg} src={imgSub} alt="casos de uso" />
      </div>
    </section>
  );
} 