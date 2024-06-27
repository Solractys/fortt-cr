import React from "react";
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
                <option>Quanto custa para reformar?</option>
                <option>Resposta 1</option>
              </select>
            </div>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Como funciona o pagamento?</option>
                <option>Resposta 2</option>
              </select>
            </div>
          </div>
          <div className={styles.faq_row}>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>O orçamento tem custo?</option>
                <option>Resposta 3</option>
              </select>
            </div>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Vocês fornecem todos os materiais?</option>
                <option>Resposta 4</option>
              </select>
            </div>
          </div>
          <div className={styles.faq_row}>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Vocês fazem contrato para a obra?</option>
                <option>Resposta 5</option>
              </select>
            </div>
            <div className={styles.faq_column}>
              <select className={styles.selectAsk}>
                <option>Visita técnica é paga?</option>
                <option>Resposta 6</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}