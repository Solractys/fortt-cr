import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BtnTop } from "../components/BtnTop";
import { BtnBack } from "../components/BtnBack";
import Link from "next/link";
import Image from "next/image";
import assentamento from "../../../public/Casos/Assentamento.svg"
import impermeabilizacao from "../../../public/Casos/Impermeabilizacao.svg"
import pinturaPredio from "../../../public/Casos/PinturaFachadaPredio.svg"
import pinturaResidencia from "../../../public/Casos/PinturaFachadaResidencia.svg"
import pinturaInterna from "../../../public/Casos/PinturaInterna.svg"
import reformaComercial from "../../../public/Casos/ReformaComercial.svg"

export default function Projetos() {
  return (
    <>
      <Navbar />
      <BtnTop />
      <BtnBack />
      <section className={styles.case_section}>
        <h1>PROJETOS</h1>
        <div className={styles.case_grid}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
          }}>
            <div className={styles.cases}>
              <div className={styles.caseText}>
                <p>
                  <strong>Assentamento de Piso</strong><br /><br />
                  Assentamento de piso de porcelanato em parede com janela.<br /><br />
                  <strong>Salvador - Stella Mares</strong><br />
                  <strong>2022</strong><br />
                  <em>| GEOMIR SANTOS |</em>
                </p>
              </div>
              <div className={styles.imgCases}>
                <Image src={assentamento} className={styles.imgCases} alt="imagem do assentamento de piso"></Image>
              </div>
            </div>
            <Link className={styles.btn} href={"https://wa.link/wea25u"}>TENHO INTERESSE</Link>
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
          }}>
            <div className={styles.cases}>
              <div className={styles.caseText}>
                <p>
                  <strong>Pintura-Fachada de Prédio</strong><br /><br />
                  Manutenção e pintura de fachada de pédio ou condomínio.<br /><br />
                  <strong>Salvador - Vitória</strong><br />
                  <strong>2022</strong><br />
                  <em>| GEOMIR SANTOS |</em>
                </p>
              </div>
              <div className={styles.imgCases}>
                <Image src={pinturaPredio} className={styles.imgCases} alt="imagem do assentamento de piso"></Image>
              </div>
            </div>
            <Link className={styles.btn} href={"https://wa.link/c9f1ja"}>TENHO INTERESSE</Link>
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
          }}>
            <div className={styles.cases}>
              <div className={styles.caseText}>
                <p>
                  <strong>Impermeabilização</strong><br /><br />
                  Impermeabilizações em lajes, impedindo futuras infiltrações.<br /><br />
                  <strong>Salvador - Carlos Gomes</strong><br />
                  <strong>2021</strong><br />
                  <em>| GEOMIR SANTOS |</em>
                </p>
              </div>
              <div className={styles.imgCases}>
                <Image src={impermeabilizacao} className={styles.imgCases} alt="imagem do assentamento de piso"></Image>
              </div>
            </div>
            <Link className={styles.btn} href={"https://wa.link/x7pquk"}>TENHO INTERESSE</Link>
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
          }}>
            <div className={styles.cases}>
              <div className={styles.caseText}>
                <p>
                  <strong>Pintura-Fachada de Residêncial</strong><br /><br />
                  Pintura ou manutenção de fachadas residênciais.<br /><br />
                  <strong>Lauro de Freitas</strong><br />
                  <strong>2023</strong><br />
                  <em>| GEOMIR SANTOS |</em>
                </p>
              </div>
              <div className={styles.imgCases}>
                <Image src={pinturaResidencia} className={styles.imgCases} alt="imagem do assentamento de piso"></Image>
              </div>
            </div>
            <Link className={styles.btn} href={"https://wa.link/xrsa0c"}>TENHO INTERESSE</Link>
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
          }}>
            <div className={styles.cases}>
              <div className={styles.caseText}>
                <p>
                  <strong>Pintura Interna</strong><br /><br />
                  Pintura residêncial interna. Paredes e teto<br /><br />
                  <strong>Salvador - Stella Mares</strong><br />
                  <strong>2022</strong><br />
                  <em>| GEOMIR SANTOS |</em>
                </p>
              </div>
              <div className={styles.imgCases}>
                <Image src={pinturaInterna} className={styles.imgCases} alt="imagem do assentamento de piso"></Image>
              </div>
            </div>
            <Link className={styles.btn} href={"https://wa.link/5op416"}>TENHO INTERESSE</Link>
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
          }}>
            <div className={styles.cases}>
              <div className={styles.caseText}>
                <p>
                  <strong>Reforma - Comercial</strong><br /><br />
                  Reforma elétrica, reforma em paredes, pintura.<br /><br />
                  <strong>Salvador - Itapuã</strong><br />
                  <strong>2023</strong><br />
                  <em>| GEOMIR SANTOS |</em>
                </p>
              </div>
              <div className={styles.imgCases}>
                <Image src={reformaComercial} className={styles.imgCases} alt="imagem do assentamento de piso"></Image>
              </div>
            </div>
            <Link className={styles.btn} href={"https://wa.link/5cyafy"}>TENHO INTERESSE</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
