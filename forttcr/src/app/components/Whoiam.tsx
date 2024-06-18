import styles from "./Whoiam.module.css";

export default function Whoaim() {
  return( 
    <div className={styles.whoaimContent}>
      <h1 className={styles.Title}>
        QUEM SOMOS
      </h1>
      <h2 className={styles.Subtitle}>
      Qualidade, compromisso e agilidade.<br/>
      Valores que giram em nosso trabalho em cada projeto.
      </h2>
      <button className={styles.buttonKnowus}>
      CONHEÇA MAIS SOBRE
      </button>
    </div>
    
  );
}
