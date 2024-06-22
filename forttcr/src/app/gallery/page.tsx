import Navbar from "../components/Navbar";
import styles from "./page.module.css";
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
        <center><button className={styles.seeMore}>VEJA MAIS</button></center>
      </section>
    </>
  );
}
export default Gallery;