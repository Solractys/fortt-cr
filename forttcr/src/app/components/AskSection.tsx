'use client'
import React, { useState } from "react";
import styles from "./AskSection.module.css";

export default function AskSection() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleAsk(index: number) {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const question = [
    { question: 'Quanto custa para reformar?', answer: 'Cada projeto de reforma é único, e não existe uma fórmula exata para determinar o orçamento com total confiança e precisão. No entanto, com base em nossa experiência, podemos fornecer algumas diretrizes gerais para ajudar no planejamento.'},
    { question: 'Como funciona o pagamento?', answer: 'O pagamento é estabelecido em contrato, com a seguinte estrutura: 50% antecipado e 50% após a conclusão do serviço.' },
    { question: 'O orçamento tem custo?', answer: 'Não cobramos pela elaboração do orçamento. Antes de enviá-lo, avaliamos a viabilidade de atender à demanda solicitada, bem como as condições técnicas e operacionais.' },
    { question: 'Vocês fornecem todos os materiais?', answer: 'O fornecimento de materiais irá variar de acordo com a obra.' },
    { question: 'Vocês fazem contrato para a obra?', answer: 'Todo e qualquer trabalho é realizado mediante contrato com assinatura física ou digital  de ambas as partes.'},
    { question: 'Visita técnica é paga?', answer: ''},
  ];

  return (
    <>
      <section className={styles.AskSection}>
        <div className={styles.faq_container}>
          <h1 className={styles.main_title}>Perguntas Frequentes</h1>
          <span>Clique na pergunta para ver a resposta</span>
          <div className={styles.gridAsk}>
            {question.map((item, index) => (
              <div className={styles.askContainer}>
                <button className={styles.selectAsk} onClick={() => toggleAsk(index)}>{item.question}</button>
                <ul className={`${styles.answer} ${activeIndex === index ? styles.show : ''}`}>
                  <li>{item.answer}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  );
}