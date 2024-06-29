import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import geomir from "../../../public/Geomir.svg";
import { Video } from "lucide-react";
import { BtnTop } from "../components/BtnTop";
import { BtnBack } from "../components/BtnBack";

export default function quemSomos() {
    return (
        <>

            <Navbar />
            <BtnTop />
            <BtnBack />
            <section className={styles.quemSomos}>
                <div className={styles.ceoContainer}>
                    <div className={styles.ceoTextContainer}>
                        <div className={styles.ceoTitle}>
                            <h1>SOBRE O FUNDADOR</h1>
                            <h2>Geomir Santos</h2>
                        </div>
                        <p>
                            Fundador de mais uma das empresas existentes de construções e reformas em Salvador.
                        </p>
                        <p>
                            A empresa possui como meta, entregar resultados de alta qualidade à seus clientes.
                        </p>
                    </div>
                        <Image layout="responsive" className={styles.geomirImage} alt="Foto do Fundador" src={geomir}/>
                </div>
                <div className={styles.groupContainer}>
                    <div className={styles.textContainer}>
                        <h1>CONSTRUINDO SEU<br/> 
                            SONHO COM CUIDADO<br/>
                             E DEDICAÇÃO</h1>
                        <p>
                            Nossa equipe de profissionais  zela para um melhor atendimento e cuidado nos serviços. Sempre trazendo fidelização aos projetos.
                        </p>
                        <Link className={styles.btn} href="https://api.whatsapp.com/send/?phone=5571996281433&text&type=phone_number&app_absent=0">CONTRATE AGORA!</Link>
                    </div>
                    <div className={styles.videoContainer}>
                        <video width={380} height={648} controls autoPlay loop>
                            <source src="video/vidquemsomos.mp4" type="video/mp4"/>
                            Seu navegador não suporta a tag de video
                        </video>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}