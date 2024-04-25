import whatsappIcon from "@/public/icons/whatsapp_flutuante.png";

import styles from "./whatsaAndInsta.module.scss";

import Image from "next/image";

export default function WhatsaAndInsta() {
  return (
    <div>
        <a id={styles.link} target="_blank" href="https://api.whatsapp.com/send?phone=5561985273940&text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Francy%20Seguros%2C%20gostaria%20de%20contratar%20um%20Plano%20de%20Sa%C3%BAde.">
            <Image id={styles.iconWhatsapp} src={whatsappIcon} alt="icone whatsapp"/>
        </a>
    </div>
  )
}
