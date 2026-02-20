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
              <p className={styles.priceCard}>$ 698,27</p>
              <p className={styles.perMonth}>de 49 a 53 anos</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Consultas Eletivas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Emergência 24 horas(PS)</p>
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
              <h3 className={styles.titleCard}>Amil</h3>
              <h4 className={styles.subTitleCard}>a partir de</h4>
            </section>
            <section>
              <p className={styles.priceCard}>$ 427,87</p>
              <p className={styles.perMonth}>de 0 a 18 anos</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Consultas Médicas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Emergência 24hrs (PS)</p>
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
              <h3 className={styles.titleCard}>Porto Saúde</h3>
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
                  <p className={styles.roll}>Exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Emergência 24hrs (PS)</p>
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
              <p className={styles.priceCard}>$ 267,90</p>
              <p className={styles.perMonth}>de 0 a 18 anos</p>
            </section>
            <section className={styles.sectionUl}>
              <ul className={styles.unList}>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Consultas Eletivas</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Hospital Próprio</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Emergência 24hrs (PS)</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Exames</p>
                </li>
                <li className={styles.descCard}>
                  <Ic />
                  <p className={styles.roll}>Cirurgias e Internações</p>
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
