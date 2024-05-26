import React, { useEffect } from "react";
import styles from "../styles/slider.module.css"; // Asegúrate de importar los estilos correctos
import logo from "../public/logos/3m.svg";
import logo1 from "../public/logos/barstool-store.svg";
import logo2 from "../public/logos/budweiser.svg";
import logo3 from "../public/logos/buzzfeed.svg";
import logo4 from "../public/logos/forbes.svg";
import logo5 from "../public/logos/macys.svg";
import logo6 from "../public/logos/menshealth.svg";
import logo7 from "../public/logos/mrbeast.svg";
import Image from 'next/image';

export default function Slider() {
   
  useEffect(() => {
    const slideContainer = document.querySelector(".logos_slide");
    const logosElement = document.querySelector(".logos");

    if (slideContainer && logosElement) {
      const copy = slideContainer.cloneNode(true);
      logosElement.appendChild(copy);
    }
  }, []);


  return (
    
    <>       

     <h3   className={styles.h3}>Carrusel de logos</h3>
    <div   className={`${styles.logos} logos`}>
      <div   className={`${styles.logos_slide} logos_slide`}>
        <Image alt="Logo" src={logo} width={100} height={40}  />
        <Image alt="Logo1" src={logo1} width={100} height={40}  />
        <Image alt="Logo2" src={logo2} width={100} height={40} />
        <Image alt="Logo3" src={logo3} width={100} height={40}  />
        <Image alt="Logo4" src={logo4} width={100} height={40} />
        <Image alt="Logo5" src={logo5} width={100} height={40} />
        <Image alt="Logo6" src={logo6} width={100} height={40} />
        <Image alt="Logo7" src={logo7} width={100} height={40}  />
      </div>
    </div>


    </>
  );
}


