import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import Circulo from "../../../public/circulo.svg";
import { BtnTop } from "../components/BtnTop";
import { BtnBack } from "../components/BtnBack";

export default function quemSomos() {
    return (
        <>

            <Navbar />
            <BtnTop/>
            <BtnBack />
            <section className={styles.quemSomos}>
                <h1>
                    QUEM SOMOS
                </h1>
                <div className={styles.textoEquipe}>
                    <Image src={Circulo} width={200} height={200} alt="Foto da Equipe" />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur, minima vel recusandae nobis cupiditate, incidunt ipsa sunt asperiores itaque impedit blanditiis. Laborum illum atque vero nihil. Praesentium, voluptatum aperiam!

                        </p>
                    </div>
                </div>
                <div className={styles.fundadores}>
                    <div className={styles.fundador}>
                    <Image src={Circulo} width={200} height={200} alt="Foto da Equipe" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod deleniti non omnis rerum atque rem repellat! Distinctio eligendi magnam molestiae, ut fuga quisquam non! Alias aliquam quidem iste molestiae?

                        </p>
                    </div>
                    <div className={styles.fundador}>
                    <Image src={Circulo} width={200} height={200} alt="Foto da Equipe" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod deleniti non omnis rerum atque rem repellat! Distinctio eligendi magnam molestiae, ut fuga quisquam non! Alias aliquam quidem iste molestiae?

                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}