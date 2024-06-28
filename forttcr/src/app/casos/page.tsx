import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BtnTop } from "../components/BtnTop";
import { BtnBack } from "../components/BtnBack";


export default function Casos() {
  return (
    <>
      <Navbar />
      <BtnTop/>
        <BtnBack />
      <section className={styles.case_section}>
        <h1>CASOS</h1>
        <div className={styles.case_grid}>
          <div className={styles.cases}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam voluptas quidem eligendi laboriosam quod et possimus.
              Facilis, repudiandae, nulla quia sed iste voluptas ea natus aspernatur
              quam quas esse perspiciatis!</p>
          </div>
          <div className={styles.cases}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam voluptas quidem eligendi laboriosam quod et possimus.
              Facilis, repudiandae, nulla quia sed iste voluptas ea natus aspernatur
              quam quas esse perspiciatis!</p>
          </div>
          <div className={styles.cases}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam voluptas quidem eligendi laboriosam quod et possimus.
              Facilis, repudiandae, nulla quia sed iste voluptas ea natus aspernatur
              quam quas esse perspiciatis!</p>
          </div>
          <div className={styles.cases}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam voluptas quidem eligendi laboriosam quod et possimus.
              Facilis, repudiandae, nulla quia sed iste voluptas ea natus aspernatur
              quam quas esse perspiciatis!</p>
          </div>
          <div className={styles.cases}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam voluptas quidem eligendi laboriosam quod et possimus.
              Facilis, repudiandae, nulla quia sed iste voluptas ea natus aspernatur
              quam quas esse perspiciatis!</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
