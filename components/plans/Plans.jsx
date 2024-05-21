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
              <h3 className={styles.titleCard}>MedSênior</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 758,60</p>
              <p className={styles.perMonth}>por mês</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Consultas Eletivas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Todos os exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Emergência 24 horas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Hospital Próprio</p>
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
              <h3 className={styles.titleCard}>Quallity</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 285,08</p>
              <p className={styles.perMonth}>por mês c/coparticipação</p>
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
                  <p className={styles.roll}>Emergência 24hrs</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Parto</p>
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
              <h3 className={styles.titleCard}>Unividas</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 197,86</p>
              <p className={styles.perMonth}>por mês</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                <Ic />
                  <p className={styles.roll}>Consultas Eletivas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Todos os exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Emergência 24hrs</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Parto</p>
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
              <h3 className={styles.titleCard}>HapVida</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 146,89</p>
              <p className={styles.perMonth}>por mês</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Consultas e Exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Hospital Próprio</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Emergência 24hrs</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Pronto Socorro</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>CPT de 12h ambulatorio</p>
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
