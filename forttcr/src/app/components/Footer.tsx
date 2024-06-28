import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Instagram from "../../../public/instagramIco.svg";
import Whatsapp from "../../../public/whatsIco.svg";
import Gmail from "../../../public/gmailIco.svg";
import Logo from "../../../public/logo.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <section className={styles.rodape}>
          <Image height={80} src={Logo} alt="logo" />
          <div className={styles.contact}>
            <h1 className={styles.title}>
              ENTRE EM CONTATO
            </h1>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/fortt_construcao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><Image src={Instagram} height={20} alt="instagram logo" /></a>
              <a href="mailto:forttconstrucao@hotmail.com"><Image src={Gmail} height={20} alt="Gmail logo" /></a>
              <a href="https://api.whatsapp.com/send/?phone=5571996281433&text&type=phone_number&app_absent=0"><Image src={Whatsapp} height={20} alt="Whatsapp logo" /></a>
            </div>
          </div>
        </section>
        <p className={styles.license}>Todos os direitos reservados © 2024</p>
      </footer>
    </>
  );

}