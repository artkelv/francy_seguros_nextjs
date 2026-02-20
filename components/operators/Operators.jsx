import Image from "next/image"
import operadoras from "@/public/img/operadoras_att.png"
import styles from "@/components/operators/operators.module.scss"

export default function Operators() {
  return (
    <section id={styles.sectionOperators}>
      <h2 id={styles.titleOperators}>Confira algumas operadoras que nós ofertamos:</h2>
      <Image id={styles.img} src={operadoras} alt="Operadoras de planos de saúde que trabalhamos" quality={100}/>
    </section>
  )
}
