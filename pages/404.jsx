import Image from "next/image";
import img404 from "@/public/img/not_found_background.svg";
import styles from "@/styles/404.module.scss";
import Link from "next/link";

export default function Page404(){
    return(
        <div id={styles.container}>
            <nav id={styles.navLinks}>
                <ul id={styles.unListLinks}>
                    <li>
                        <Link id={styles.benefits} href="/#benefits">Beneficios</Link>
                    </li>
                    <li>
                        <Link id={styles.plans} href="/#plans">Planos</Link>
                    </li>
                    <li>
                        <a id={styles.ancorCall} href="cel:5561985273940">Ligar</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.sectionInfo}>
                <div id={styles.content}>
                    <h1 id={styles.title}>OOPS! Página nao encontrada</h1>
                    <p id={styles.description}>Tem certeza que a URL que voce deseja acessar em nosso site está correta?</p>
                    <Link id={styles.ancor} href="/">Voltar para Home</Link>
                </div>
                <Image id={styles.img404} src={img404} alt="A imagem diz: página não encontrada" />
            </div>
        </div>
    )
}


