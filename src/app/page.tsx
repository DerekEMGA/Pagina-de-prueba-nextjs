"use client";

import styles from "./page.module.css";
import Typewritter from "../components/typewriter_effect";
import Footer from "../components/footer";
import Cards from "@/components/cards";
import Navbar from "../components/navbar/navbar";
import Slider from "../components/slider";
import { StyleSheetManager } from 'styled-components';
import Words from "../components/words"

export default function Home() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>

    <main className={styles.main}>
      <Navbar />
      <div data-aos="fade-up" className={styles.center} id="home">
        <p >Bienvenido a </p>
         <Words />
      </div>
      <p>Continua... </p>
      <br></br>
      <Cards/>
      <Slider />
    </main>
    <Footer/>
    </StyleSheetManager>

  );
}



