import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import React from "react";
import Image from "next/image";
import aplique from "../../../public/Aplique_etiqueta.png"
import efeitopar from "../../../public/Efeitospar_etiqueta.png"
import fechadura from "../../../public/Fechaduras_etiqueta.png"
import pinturas from "../../../public/Pinturasr_etiqueta.png"
import pisospred from "../../../public/Pisosp_etiqueta.png"
import pisosres from "../../../public/Pisosr_etiqueta.png"
import reformap from "../../../public/Reforma_pia_etiqueta.png"
import reformasl from "../../../public/Reformasl_etiqueta.png"
import telhados from "../../../public/Telhados_etiqueta.png"

function Gallery() {
  return (
    <>
      <Navbar />
      {/* Daqui pra baixo é contigo pae! */}
      <section className={styles.gallerySection}>
        <h1 className={styles.title}>GALERIA</h1>
        <div className={styles.grid_image}>
          <div className={styles.image1}></div>
          <div className={styles.image2}></div>
          <div className={styles.image3}></div>
          <div className={styles.image4}></div>
          <div className={styles.image5}></div>
          <div className={styles.image6}></div>
          <div className={styles.image7}></div>
          <div className={styles.image8}></div>
          <div className={styles.image9}></div>
          <div className={styles.image10}></div>
        </div>
        <button className={styles.seeMore}>VEJA MAIS</button>
      </section>
      <Footer/>
    </>
  );
}
export default Gallery;