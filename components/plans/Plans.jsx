import Ic from "../iconCheck/IconCheck";
import styles from "@/components/plans/plans.module.scss"
import { waitFunction } from "@/utils/alterBorderForm";

export default function Plans() {
  return (
    <div id="plans" className={styles.container}>
      <section id={styles.content}>
        <div id={styles.titleSection}>
          <h2 id={styles.titlePlans}>Planos ideais</h2>
          <p id={styles.pgraphPlans}>Confira alguns dos nossos melhores planos abaixo.</p>
        </div>
        <section id={styles.cards}>
          <div id={styles.firstCardPrice}>
            <section>
              <h3 className={styles.titleCard}>SulÁmerica</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 119,90</p>
              <p className={styles.perMonth}>por mês</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Consultas Médicas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Todos os exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Atendimento 24hrs</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Homecare e Parto</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Cirurgias e internações</p>
                </li>
              </ul>
            </section>
            <a className={styles.btnCard} onClick={() => waitFunction()} href="#top">Obter Plano</a>
          </div>
          <div id={styles.secondCardPrice}>
            <section>
              <h3 className={styles.titleCard}>Amil 400</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 240,90</p>
              <p className={styles.perMonth}>por mês</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Consultas Médicas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Todos os exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Atendimento 24hrs</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Homecare e Parto</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Cirurgias e internações</p>
                </li>
              </ul>
            </section>
            <a className={styles.btnCard} onClick={() => waitFunction()} href="#top">Obter Plano</a>
          </div>
          <div id={styles.thirdCardPrice}>
            <section>
              <h3 className={styles.titleCard}>Bradesco Saúde</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 339,90</p>
              <p className={styles.perMonth}>por mês</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                <Ic />
                  <p className={styles.roll}>Consultas Médicas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Todos os exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Atendimento 24hrs</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Homecare e Parto</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Cirurgias e internações</p>
                </li>
              </ul>
            </section>
            <a className={styles.btnCard} onClick={() => waitFunction()} href="#top">Obter Plano</a>
          </div>
          <div id={styles.fourthCardPrice}>
            <section>
              <h3 className={styles.titleCard}>Unimed Rio</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 229,90</p>
              <p className={styles.perMonth}>por mês</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Consultas Médicas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Todos os exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Atendimento 24hrs</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Homecare e Parto</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Cirurgias e internações</p>
                </li>
              </ul>
            </section>
            <a className={styles.btnCard} onClick={() => waitFunction()} href="#top">Obter Plano</a>
          </div>
        </section>
      </section>
    </div>
  );
}
