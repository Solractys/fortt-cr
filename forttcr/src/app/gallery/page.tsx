import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import React from "react";
import Image from "next/image";
import aplique from "../../../public/Aplique_etiqueta.png";
import efeitopar from "../../../public/Efeitospar_etiqueta.png";
import fechadura from "../../../public/Fechaduras_etiqueta.png";
import pinturas from "../../../public/Pinturasr_etiqueta.png";
import pisospred from "../../../public/Pisosp_etiqueta.png";
import pisosres from "../../../public/Pisosr_etiqueta.png";
import reformap from "../../../public/Reforma_pia_etiqueta.png";
import reformasl from "../../../public/Reformasl_etiqueta.png";
import telhados from "../../../public/Telhados_etiqueta.png";
import camera from "../../../public/Camera.png"
import eletrica from "../../../public/Eletrica.png"
import fachada from "../../../public/Fachada.png"
import gesso from "../../../public/Gesso.png"
import impermeabilizacao from "../../../public/Impermeabilizacao1.png"
import pinturaq from "../../../public/Pintura_quadra.png"
import portao from "../../../public/Portao.png"
import { BtnTop } from "../components/BtnTop";
import { BtnBack } from "../components/BtnBack";


function Gallery() {
  return (
    <>
      <Navbar />
      <BtnTop/>
      <BtnBack/>
      <section className={styles.gallerySection}>
        <h1 className={styles.title}>GALERIA</h1>
        <div className={styles.grid_image}>
          <Image
            layout="responsive"
            src={aplique}
            alt="Imagem onde mostra o antes e o depois do serviço de aplique. Antes: mostra uma parede bege com buracos de tomada, uma escada em frente a parede e uma estante marrom e branca com algumas ferramentas em cima. Depois: mostra uma parede com um papel de parede cinza com aparência de madeira e com a mesma estante marrom e branca à frente da parede."
            width={200}
          />
          <Image
            layout="responsive"
            src={efeitopar}
            alt="Imagem onde mostra o antes e o depois de um serviço de aplicação de um papel de parede com efeito. Antes: mostra uma parede branca com sua tinta descascando, mostrando partes de cimento. Depois: papel de parede aplicado com texturas de paralelepídedos. "
            width={400}
          />
          <Image
            layout="responsive"
            src={fechadura}
            alt="Imagem onde mostra o antes e o depois da troca de uma fechadura de portão. Antes: mostra uma fechadura com sua pintura avariada e estrutura enferrujada. Depois: mostra uma fechadura nova após instalação, de cor preta."
            width={400}
          />
          <Image
            layout="responsive"
            src={pinturas}
            alt="Imagem onde mostra o antes e o depois de um serviço de pintura. Antes: mostra uma parede branca descascando com uma porta e janela de cor marrom. Depois: mostra a mesma parede pintada na cor amarela com uma porta e janela de cor marrom."
            width={400}
          />
          <Image
            layout="responsive"
            src={pisospred}
            alt="Imagem onde mostra o antes e o depois de um serviço de troca e assentação de pisos prediais. Antes: mostra um piso de madeira na cor marrom bem gasto ao lado de uma piscina com uma mesa e 2 cadeiras ao fundo da imagem. Depois: mostra um piso de cor verde musgo recém instalado ao lado de uma piscina."
            width={400}
          />
          <Image
            src={pisosres}
            layout="responsive"
            alt="Imagem onde mostra o antes e o depois de um serviço de troca e assentação de pisos residenciais. Antes: mostra um piso branco comum. Depois: mostra um piso branco de porcelanato com detalhes pretos após ser instalado."
            width={400}
          />
          <Image
            layout="responsive"
            src={reformap}
            alt="Imagem onde mostra o antes e o depois de um serviço de instalação de uma pia em uma área de serviço. Antes: mostra um homem negro, de camisa cinza, calça azul com manchas brancas e botas pretas em um cômodo de paredes e pisos brancos, com cacos de pisos brancos quebrados no chão iniciando a instalação da pia. Depois: mostra a pia instalada com uma bancada em mármore preto na parede da área de serviço."
            width={400}
          />
          <Image
            layout="responsive"
            src={reformasl}
            alt="Imagem onde mostra o antes e o depois de um serviço de reforma em uma loja. Antes: mostra uma área semelhante a um corredor predominantemente branca com fios expostos no texto. Depois: mostra um espaço predominantemente branco com uma parede rosa ao fundo, uma prateleira com itens de Pet Shop. Na prateleira de cima, contém mochilas para transportar pets. Na segunda prateleira, contém pacotes de rações, na cor preta, para gatos. Na terceira prateleira, contém brinquedos para pets, como mordedores."
            width={400}
          />
          <Image
            layout="responsive"
            src={telhados}
            alt="Imagem onde mostra o antes e o depois de um serviço de troca de telhas em um telhado. Antes: mostra uma telhado com aparência bem gasta e a ausência de algumas telhas. Depois: mostra o telhado com novas telhas na cor branca e ao fundo da imagem, mostra um homem negro com camisa cinza de manga longa e calça azul com manchas brancas utilizando um pincel para pintar as telhas."
            width={400}
          />
          <Image
            layout="responsive"
            src={camera}
            alt="Imagem mostra duas mãos de uma pessoa utilizando uma chave de fenda amarela realizando a instalação de uma câmera de segurança na cor prata em um lugar alto."
            width={400}
          />
          <Image
            layout="responsive"
            src={eletrica}
            alt="Imagem onde mostra uma pessoa agachada cortando fios nas cores vermelha, amarela e azul utilizando um estilete laranja para instalar uma rede elétrica através de um espaço retangular com espaços quadrados delimitados dentro do retângulo em uma parede branca."
            width={400}
          />
          <Image
            layout="responsive"
            src={fachada}
            alt="Imagem onde mostra dois homens em uma estrutura presa com cordas realizando a manuntenção da fachada de um prédio amarelo."
            width={400}
          />
          <Image
            layout="responsive"
            src={gesso}
            alt="Imagem onde mostra uma parte de um cômodo com uma parede cinza, porta branca e um teto branco feito de gesso."
            width={400}
          />
          <Image
            layout="responsive"
            src={impermeabilizacao}
            alt="Imagem onde mostra um homem em pé com calça cinza e botas marrons aplicando um produto impermeabilizante preto em um chão de cimento utilizando um rolo de pintura com cabo azul e balde azul para armazenar o produto."
            width={400}
          />
          <Image
            layout="responsive"
            src={pinturaq}
            alt="Imagem onde mostra o antes e depois de um serviço de pintura para revitalizar uma quadra poliesportiva de cores vermelha, azul, branca, verde e amarela. Antes: mostra uma imagem da quadra com a pintura gasta e descascando. Depois: mostra uma imagem da quadra após receber a pintura e ser revitalizada, ficando com as cores vermelha, azul, branca, verde e amarela vibrantes."
            width={400}
          />
          <Image
            layout="responsive"
            src={portao}
            alt="Imagem onde mostra uma casa amarela com uma porta preta, uma pequena área com grama e um portão elétrico na cor preta"
            width={400}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Gallery;