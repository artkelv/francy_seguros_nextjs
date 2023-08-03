import Image from "next/image";

import logoFrancySeguros from "@/public/img/logo_SVG.svg";
import styles from "@/components/header/header.module.scss"

import Link from "next/link";

export default function Header() {
  return (
    <header id={styles.headerContent}>
      <Image id={styles.img} src={logoFrancySeguros} alt="Logo Francy Seguros" />
      <nav id={styles.navList}>
        <ul id={styles.unList}>
          <li className={styles.lists}>
            <a
            href="#benefits" 
            className={`${styles.benefits} ${styles.ancor}`}
            >Beneficios</a>
          </li>
          <li className={styles.lists}>
            <a 
            href="#plans"
            className={`${styles.plans} ${styles.ancor}`}
            >Planos</a>
          </li>
          <li className={styles.lists}>
            <a 
            href="tel:+5561985273940"
            className={`${styles.call} ${styles.ancor}`}
            >Ligar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
