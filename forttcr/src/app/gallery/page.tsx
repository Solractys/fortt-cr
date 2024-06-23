import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import Footer from "../components/Footer";
function Gallery() {
  return (
    <>
      <Navbar />
      {/* Daqui pra baixo é contigo pae! */}
      <section className={styles.gallerySection}>
        <h1 className={styles.title}>GALERIA</h1>
        <div className={styles.grid_image}>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
          <div className={styles.image}></div>
        </div>
        <button className={styles.seeMore}>VEJA MAIS</button>
      </section>
      <Footer/>
    </>
  );
}
export default Gallery;