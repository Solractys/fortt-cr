import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import React from "react";
import Image from "next/image";
import construcao from "../../../public/CONSTRUÇÃO1.png"
import pintura from "../../../public/PINTURAS1.png"
import telhado from "../../../public/TELHADOS1.png"
import reforma from "../../../public/REFORMAS1.png"
import grade from "../../../public/GRADES.png"
import impermeabilizacao from "../../../public/IMPERMEABILIZACAO.png"
import { BtnTop } from "../components/BtnTop";
import { BtnBack } from "../components/Btnback";
function Servicos() {
    return (
        <>
            <Navbar />
            <BtnTop />
            <section className={styles.servicesSection}>
            <BtnBack />
                <h1 className={styles.title}>CONHEÇA NOSSOS SERVIÇOS</h1>
                <div className={styles.service_container}>
                    <div className={styles.service}>
                        <Image className={styles.icon}
                            width={200}
                            src={pintura}
                            alt="Imagem onde mostra uma parede pintada de amarelo com uma porta posicionada à esquerda e uma janela posicionada à direita."
                        />
                        <h2>PINTURA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <a href="https://wa.link/xzjs8r">
                            <button className={styles.btn}>CONTRATE AGORA!</button>
                        </a>
                    </div>
                    <div className={styles.service}>
                        <Image className={styles.icon}
                            src={telhado}
                            alt="Imagem onde mostra um homem de camisa de manga longa cinza e calça azul realizando a pintura das telhas em um telhado branco."
                            width={200}
                        />
                        <h2>TELHADO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <a href="https://wa.link/nurco7">
                            <button className={styles.btn}>CONTRATE AGORA!</button>
                        </a>
                    </div>
                    <div className={styles.service}>
                        <Image className={styles.icon}
                            src={reforma}
                            alt="Imagem onde mostra um espaço predominantemente branco com uma parede rosa ao fundo, uma prateleira com itens de Pet Shop. Na prateleira de cima, contém mochilas para transportar pets. Na segunda prateleira, contém pacotes de rações, na cor preta, para gatos. Na terceira prateleira, contém brinquedos para pets, como mordedores."
                            width={200}
                        />
                        <h2>REFORMAS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <a href="https://wa.link/1dpa21">
                            <button className={styles.btn}>CONTRATE AGORA!</button>
                        </a>
                    </div>
                    <div className={styles.service}>
                        <Image className={styles.icon}
                            src={impermeabilizacao}
                            alt="Imagem onde mostra o braço direito de uma pessoa usando uma blusa de manga longa cinza, luva branca, calça azul e bota preta aplicando um impermeabilizante preto em um chão cinza."
                            width={200}
                        />
                        <h2>IMPERMEABILIZAÇÃO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <a href="https://wa.link/xenayc">
                            <button className={styles.btn}>CONTRATE AGORA!</button>
                        </a>
                    </div>
                    <div className={styles.service}>
                        <Image className={styles.icon}
                            src={construcao}
                            alt="Imagem onde mostra uma parede branca, uma área retangular no chão preenchida com cimento e uma lixeira preta ao fundo."
                            width={200}
                        />
                        <h2>CONSTRUÇÃO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <a href="https://wa.link/mj6w8x">
                            <button className={styles.btn}>CONTRATE AGORA!</button>
                        </a>
                    </div>
                    <div className={styles.service}>
                        <Image className={styles.icon}
                            src={grade}
                            alt="Imagem onde mostra uma parede branca com uma parede branca e uma grade preta."
                            width={200}
                        />
                        <h2>GRADES</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <a href="https://wa.link/71f6aa">
                            <button className={styles.btn}>CONTRATE AGORA!</button>
                        </a>
                    </div>
                </div>
                <a href="https://wa.link/cu4erh">
                    <button className={styles.moreServices}>MAIS SERVIÇOS</button>
                </a>
            </section>
            <Footer />
        </>
    )
}
export default Servicos;