import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import React from "react";
import Image from "next/image";
import construcao from "../../../public/CONSTRUÇÃO1.png"
import pintura from "../../../public/PINTURAS1.png"
import telhado from "../../../public/TELHADOS1.png"
import reforma from "../../../public/REFORMAS1.png"
function Servicos() {
    return (
        <>
            <Navbar />
            <section className={styles.servicesSection}>
                <h1 className={styles.title}>CONHEÇA NOSSOS SERVIÇOS</h1>
                <div className={styles.service_container}>
                    <div className={styles.service}>
                        <div className={styles.icon}>
                            <Image
                                src={pintura}
                                alt="Imagem onde mostra uma parede pintada de amarelo com uma porta posicionada à esquerda e uma janela posicionada à direita."
                                width={300}
                                height={300}
                            />
                        </div>
                        <h2>PINTURA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button className={styles.btn}>CONTRATE AGORA!</button>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}>
                            <Image
                                src={telhado}
                                alt="Imagem onde mostra um homem de camisa de manga longa cinza e calça azul realizando a pintura das telhas em um telhado branco."
                                width={300}
                                height={300}
                            />
                        </div>
                        <h2>TELHADO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button className={styles.btn}>CONTRATE AGORA!</button>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}>
                            <Image
                                src={reforma}
                                alt="Imagem"
                                width={300}
                                height={300}
                            />
                        </div>
                        <h2>REFORMAS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button className={styles.btn}>CONTRATE AGORA!</button>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}></div>
                        <h2>IMPERMEABILIZAÇÃO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button className={styles.btn}>CONTRATE AGORA!</button>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}>
                            <Image
                                src={construcao}
                                alt="Imagem"
                                width={300}
                                height={300}
                            />
                        </div>
                        <h2>CONSTRUÇÃO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button className={styles.btn}>CONTRATE AGORA!</button>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}></div>
                        <h2>GRADES</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button className={styles.btn}>CONTRATE AGORA!</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Servicos;