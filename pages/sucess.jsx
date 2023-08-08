import Link from "next/link";
import "animate.css"
import styles from "@/styles/sucessPage.module.scss";
import Head from "next/head";

export default function sucessPage(){
    return(
        <div id={styles.containerSucessPage}>
            <Head>
                <title>Solicitação enviada!</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
            </Head>
            <div id={styles.imgSucess}></div>
            <section id={styles.sectionTitles} className="animate__animated animate__backInRight">
                <div id={styles.contentTitles}>
                    <h1 id={styles.title}>Parabéns!</h1>
                    <p id={styles.subTitle}>Sua solicitação foi enviada com sucesso!</p>

                    <h2 id={styles.doubt}>Ficou com dúvida em algo? <br/>ligue <strong>(61) 9 8527-3940</strong></h2>
                    <h5>
                        <Link id={styles.ancorGoHome} href="/">Voltar para o Site</Link>
                    </h5>
                </div>
            </section>
        </div>
    )        
}