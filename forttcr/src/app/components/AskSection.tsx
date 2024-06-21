import styles from "./AskSection.module.css";

export default function AskSection() {
  return (
    <>
      <section className={styles.AskSection}>
        <div className={styles.faq_container}>
          <h1 className={styles.main_title}>Perguntas Frequentes</h1>
          <div className={styles.faq_row}>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Pergunta 1</option>
                <option>Resposta 1</option>
              </select>
            </div>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Pergunta 2</option>
                <option>Resposta 2</option>
              </select>
            </div>
          </div>
          <div className={styles.faq_row}>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Pergunta 3</option>
                <option>Resposta 3</option>
              </select>
            </div>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Pergunta 4</option>
                <option>Resposta 4</option>
              </select>
            </div>
          </div>
          <div className={styles.faq_row}>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Pergunta 5</option>
                <option>Resposta 5</option>
              </select>
            </div>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Pergunta 6</option>
                <option>Resposta 6</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}