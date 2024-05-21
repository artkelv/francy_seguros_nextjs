import styles from "./webtechAd.module.scss";

export default function WebtechAd() {
  return (
    <div id={styles.box}>
        <div id={styles.boxTitle}>
            <h1 id={styles.titleWebtech}>Este site foi criado pela <strong id={styles.webtechUnique}>WebTech.</strong></h1>
            <div id={styles.boxDescriptions}>
                <p className={styles.descriptionWebtech}>Uma empresa de Tecnologia focada na criação de sites.</p>
                <p className={styles.descriptionWebtech}>Somos de Brasilia, DF e temos muito orgulho do que estamos contruindo. Aqui nós queremos fazer parte do crescimento da sua empresa, por isso nos dedicamos na criação do site da sua empresa.</p>
            </div>
        </div>
        <div id={styles.goButtons}>
            <a id={styles.goWebtechSite} href="https://webtechservicos.com.br/">Visitar Site</a>
            <a id={styles.wantSite} href="https://api.whatsapp.com/send?phone=5561982434868&amp;text=Olá, vim do site Francy Seguros e gostaria de um site personalizado!">Quero um Site</a>  
        </div>
    </div>
  )
}
