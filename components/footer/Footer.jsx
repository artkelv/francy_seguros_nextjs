import styles from "@/components/footer/footer.module.scss"

export default function Footer(){
    return(
        <footer id={styles.footerContent}>
            <p id={styles.pgraphFooter}>© 2022 Francy Seguros  -  Todos os direitos reservados | Desenvolvido por <a id={styles.creator} href="https://webtechservicos.com.br" target="_blank">WebTech</a></p>
        </footer>
    )
}