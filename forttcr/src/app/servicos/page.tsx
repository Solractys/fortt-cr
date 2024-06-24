import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import React from "react";

function Servicos() {
    return (
        <>
            <Navbar />
            <section className={styles.servicesSection}>
                <h1 className={styles.title}>CONHEÇA NOSSOS SERVIÇOS</h1>
                <div className={styles.service_container}>
                    <div className={styles.service}>
                        <div className={styles.icon}></div>
                        <h2>PINTURA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button className={styles.btn}>CONTRATE AGORA!</button>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}></div>
                        <h2>TELHADO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button className={styles.btn}>CONTRATE AGORA!</button>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}></div>
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
                        <div className={styles.icon}></div>
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