import React from "react";
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
              <a href="https://www.instagram.com/fortt_construcao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="instagramIco.svg" alt="instagram logo" /></a>
              <a href="mailto:Geomirsantos@gmail.com"><img src="gmailIco.svg" alt="Gmail logo" /></a>
              <a href="https://api.whatsapp.com/send/?phone=5571996281433&text&type=phone_number&app_absent=0"><img src="whatsIco.svg" alt="Whatsapp logo" /></a>
            </div>
          </div>
        </section>
        <p className={styles.license}>Todos os direitos reservados © 2024</p>
      </footer>
    </>
  );

}