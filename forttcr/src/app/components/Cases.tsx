import React from "react";
import styles from "./Cases.module.css";

export default function Cases() {
  return(
    <section className={styles.sectionCase}>
    <div className={styles.titleCases}>
      <h1>
        REFORMAS, APROVEITO DE <br/>
        ESPAÇO, INOVAÇÕES, <br/>
        DENTRE OUTROS SERVIÇOS 
        </h1>
        <button>CONHEÇA OS CASOS</button>
    </div>
      <div>
        <img className={styles.useCaseImg} src="imgSub.png" alt="casos de uso" />
      </div>
    </section>
  );
} 