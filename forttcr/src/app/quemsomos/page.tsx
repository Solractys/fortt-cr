import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function quemSomos() {
    return (
        <>
            <Navbar />
            <section className={styles.quemSomos}>
                <h1>
                    QUEM SOMOS
                </h1>
                <div className={styles.textoEquipe}>
                    <img src="" alt="Foto da Equipe" />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur, minima vel recusandae nobis cupiditate, incidunt ipsa sunt asperiores itaque impedit blanditiis. Laborum illum atque vero nihil. Praesentium, voluptatum aperiam!

                        </p>
                    </div>
                </div>
                <div className={styles.fundadores}>
                    <div className={styles.fundador}>
                        <img src="" alt="Fundador" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod deleniti non omnis rerum atque rem repellat! Distinctio eligendi magnam molestiae, ut fuga quisquam non! Alias aliquam quidem iste molestiae?

                        </p>
                    </div>
                    <div className={styles.fundador}>
                        <img src="" alt="Fundador" />
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