import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import React from "react";
import Image from "next/image";
import aplique from "../../../public/Aplique_etiqueta.png";
import efeitopar from "../../../public/Efeitospar_etiqueta.png";
import fechadura from "../../../public/Fechaduras_etiqueta.png";
import pinturas from "../../../public/Pinturasr_etiqueta.png";
import pisospred from "../../../public/Pisosp_etiqueta.png";
import pisosres from "../../../public/Pisosr_etiqueta.png";
import reformap from "../../../public/Reforma_pia_etiqueta.png";
import reformasl from "../../../public/Reformasl_etiqueta.png";
import telhados from "../../../public/Telhados_etiqueta.png";

function Gallery() {
  return (
    <>
      <Navbar />
      <section className={styles.gallerySection}>
        <h1 className={styles.title}>GALERIA</h1>
        <div className={styles.grid_image}>
          <Image
            src={aplique}
            alt="Ilustração de serviço"
            width={400}
          />
          <Image
            src={efeitopar}
            alt="Ilustração de serviço"
            width={400}
          />
          <Image
            src={fechadura}
            alt="Ilustração de serviço"
            width={400}
          />
          <Image
            src={pinturas}
            alt="Ilustração de serviço"
            width={400}
          />
          <Image
            src={pisospred}
            alt="Ilustração de serviço"
            width={400}
          />
          <Image
            src={pisosres}
            alt="Ilustração de serviço"
            width={400}
          />
          <Image
            src={reformap}
            alt="Ilustração de serviço"
            width={400}
          />
          <Image
            src={reformasl}
            alt="Ilustração de serviço"
            width={400}
          />
          <Image
            src={telhados}
            alt="Ilustração de serviço"
            width={400}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Gallery;