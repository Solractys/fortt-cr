import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <section className={styles.rodape}>
          <img src="logo.svg" alt="logo" />
          <div className={styles.contact}>
            <h1 className={styles.title}>
              ENTRE EM CONTATO
            </h1>
            <div className={styles.socials}>
              <a href="#"><img src="instagramIco.svg" alt="instagram logo" /></a>
              <a href="#"><img src="gmailIco.svg" alt="Gmail logo" /></a>
              <a href="#"><img src="whatsIco.svg" alt="Whatsapp logo" /></a>
            </div>
          </div>
        </section>
        <p className={styles.license}>Todos os direitos reservados © 2024</p>
      </footer>
    </>
  );

}