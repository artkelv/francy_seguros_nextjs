import Image from "next/image";

import setaDireita from "@/public/img/arrow_right.png"
import apertoDeMaos from "@/public/img/aperto_maos.png"
import coracaoMedicina from "@/public/icons/coracao_medicina.png"
import icoDinheiro from "@/public/icons/ico_dinheiro.png"
import icoRelogio from "@/public/icons/ico_relogio.png"

import logoWhatsapp from "@/public/img/logo_whatsapp.png"

import styles from "@/components/whyFrancy/whyFrancy.module.scss"

export default function WhyFrancy() {
  return (
    <section id="benefits" className={styles.containerWhyFrancy}>
      <div id={styles.content}>
        <section id={styles.subContent}>
          <Image id={styles.arrowRight} src={setaDireita} alt="Seta a direita" width="250" />
          <h2 id={styles.titleWhyFrancy}>Por que escolher a Francy Seguros?</h2>
        </section>
        <section id={styles.sectionMain}>
          <div id={styles.firstSection}>
            <article className={styles.boxArticle}>
              <Image
                src={apertoDeMaos}
                alt="Imagem de aperto de mãos"
                width="80"
              />
              <div className={styles.description}>
                <h3>Compromisso</h3>
                <p>Aqui a seriedade e o compromisso com o cliente vem em primeirolugar.</p>
              </div>
            </article>
            <article className={styles.boxArticle}>
              <Image
                src={coracaoMedicina}
                alt="Imagem de coração"
                width="80"
              />
              <div className={styles.description}>
                <h3>Referência na área</h3>
                <p>Há mais de 25 anos no mercado, fidelizando clientes.</p>
              </div>
            </article>
          </div>
          <div id={styles.secondSection}>
            <article className={styles.boxArticle}>
              <Image 
                src={icoDinheiro} 
                alt="Imagem dinheiro" 
                width="80"
              />
              <div className={styles.description}>
                <h3>Planos perfeitos</h3>
                <p>O melhor plano é aquele que atende a sua necessidade e que cabe no seu bolso.</p>
              </div>
            </article>
            <article className={styles.boxArticle}>
              <Image 
              src={icoRelogio} 
              alt="Imagem relógio" 
              width="80" 
              />
              <div className={styles.description}>
                <h3>Agilidade e rapidez</h3>
                <p>As solitações online são respondidas em ate 1 hora.</p>
              </div>
            </article>
          </div>
        </section>
      </div>
      {/* <a href='https://br.freepik.com/fotos-vetores-gratis/mulher-tecnologia'>Mulher tecnologia foto criado por rawpixel.com - br.freepik.com</a> */}
      <section id={styles.figureEndSection}>
        <div id={styles.goForBroker}>
          <a
            id={styles.ancorWpp}
            href="https://wa.me/5561985273940?text=Olá!%20:)%20Gostaria%20de%20mais%20mais%20informações%20sobre%20os%20planos.%20Poderia%20me%20ajudar?"
            target="_blank"
          >
            falar com corretor
          </a>
          <Image src={logoWhatsapp} alt="contate-nos via whatsapp" width="40" />
        </div>
      </section>
    </section>
  );
}
