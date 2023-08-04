import { useState } from 'react';

import logo_whatsapp from "@/public/img/logo_whatsapp.png";
import Image from 'next/image';

import Header from '@/components/header/Header';
import WhyFrancy from '@/components/whyFrancy/WhyFrancy';
import Plans from "@/components/plans/Plans";
import Operators from '@/components/operators/Operators';
import Footer from '@/components/footer/Footer';

import styles from "@/styles/index.module.scss" ;
import Head from 'next/head';

export default function Home() {

  const [name, setName] =  useState('');
  const [email, setEmail] =  useState('');
  const [tellPhone, setTellphone] =  useState('');
  const [plan, setPlan] =  useState('Individual');
  async function sendMessageByBroker(e){
    e.preventDefault()
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, tellPhone, plan }),
      });

      if (response.ok) {
        alert('E-mail enviado com sucesso!');
      } else {
        const data = await response.json();
        alert(`Erro: ${data.error}`);
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      alert('Ocorreu um erro ao enviar o e-mail.');
    }
  }

  return (
    <div>
      <Head>
        <title>Francy Seguros - Planos de Saúde e Odontológico | Melhores Opções.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Encontre o melhor plano de saúde, odontológico ou empresarial para você e sua família. Cote agora com as melhores seguradoras do mercado." />
        <meta property="og:site_name" content="Francy Seguros" />
        <meta property="og:title" content="Francy Seguros | Planos de Saúde e Odontológicos" />
        <meta property="og:description" content="Planos de Saúde e Odontológicos baratos." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://francyseguros.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="caminhoDaImagem" />
        <meta name="keywords" content="planos de saúde, planos odontológicos, saúde, odontologia, seguro saúde, convênio médico, tratamento odontológico, saúde bucal, exames médicos, consultas médicas, prevenção de doenças, plano de saúde para empresas, plano de saúde para família, plano de saúde individual" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Arthur Kelvim" />
        <link rel="canonical" href="https://francyseguros.com/" />
      </Head>
      <Header/>
      <main id="top" className={styles.mainContent}>
        <form id="formLead" className={styles.form} method='post' onSubmit={sendMessageByBroker}>
          <h1 id={styles.titleForm}>Peça uma cotação</h1>
          <p id={styles.subTitleForm}>É gratuito.</p>
            <input className={styles.inputForm} type="name" name="nome" value={name} onChange={e => setName(e.target.value)} placeholder='Nome' required/>
            <input className={styles.inputForm} type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail' required/>
            <input className={styles.inputForm} type="tel" name="telefone" value={tellPhone} onChange={e => setTellphone(e.target.value)} placeholder='Telefone' required/>
              <select id={styles.selectForm} value={plan} name="plano" onChange={e => setPlan(e.target.value)} required>
                <option value="Individual" >Individual</option>
                <option value="Familiar" >Familiar</option>
                <option value="Empresarial" >Empresarial</option>
              </select>
            <button id={styles.btnSend} type='submit'>Pedir cotação</button>
            <p id={styles.pprivacity}>Privacidade 100% garantida.</p>
        </form>
        <section id={styles.sectionTitles}>
          <h1 id={styles.title}>"Planos de Saúde e Odontológicos</h1>
          <h2 id={styles.subTitle}>pelo menor preço."</h2>
          <section id={styles.sectionBroker}>
            <Image id={styles.imgWhatsapp} src={logo_whatsapp} alt='logo whatsapp' width="50"/>
            <a id={styles.ancorForBroker} href="https://wa.me/5561985273940?text=Olá!%20:)%20Gostaria%20de%20mais%20mais%20informações%20sobre%20os%20planos.%20Poderia%20me%20ajudar?" target="_blank">Falar com corretor</a>
            {/* <a href="https://br.freepik.com/fotos-vetores-gratis/filhos"> Filhos foto criado por rawpixel.com - br.freepik.com</a> */}
          </section>
        </section>
      </main>
      <WhyFrancy/>
      <Plans/>
      <Operators/>
      <Footer/>
    </div>
  )
}

      