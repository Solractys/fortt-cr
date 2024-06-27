import React from "react";
import styles from "./KnowUs.module.css";
import Link from "next/link";

export default function KnowUs() {
  return (
    <>
      <section className={styles.sectionKnowUs}>
       <h1 className={styles.title}>CONHEÇA NOSSOS SERVIÇOS</h1>  
       <Link href="/servicos" className={styles.knowMore}>SAIBA MAIS</Link> 
      </section>
    </>
  );
}