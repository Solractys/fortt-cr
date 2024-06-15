import styles from "./MainContent.module.css";
export default function MainContent() {
  return (
    <>
    <div className={styles.imgbackground}>
      <h1 className={styles.content}>
        "CONSTRUÇÃO <br/>
        É A ARTE DE COMO <br/>
        GASTAR ESPAÇO."
      </h1>
        <button className={styles.saibamais}>SAIBA MAIS</button>
    </div>
    </>
  );
};
