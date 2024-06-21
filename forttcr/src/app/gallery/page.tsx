import Navbar from "../components/Navbar";
import styles from "./page.module.css";
function Gallery (){
  return (
    <>
      <Navbar/>
      {/* Daqui pra baixo é contigo pae! */}
     <section className={styles.grid_image}>
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
     </section>
    </>
  );
}
export default Gallery;