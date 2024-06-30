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
      <div className={styles.videoContainer}>
        <video width={300} autoPlay muted controls loop>
          <source src="video/videocasos.mp4" type="video/mp4"/>
        </video>
      </div>
    </section>
  );
} 