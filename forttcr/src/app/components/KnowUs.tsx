import styles from "./KnowUs.module.css";

export default function KnowUs() {
  return (
    <>
      <section className={styles.sectionKnowUs}>
       <h1 className={styles.title}>CONHEÇA NOSSOS SERVIÇOS</h1>  
       <button className={styles.knowMore}>SAIBA MAIS</button> 
      </section>
    </>
  );
}