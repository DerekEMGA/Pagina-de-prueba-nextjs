import React from 'react';
import styles from "../styles/cards.module.css";
import logo from "../public/images/logo.png"
import Image from 'next/image'


export default function Cards()
{    return (
    <>
<div className={styles.body}>
    <h2 className={styles.h2}>Cards</h2>

    <div className={styles.container}>
  
         <div className={styles.containerCard}>

            <a href="#" className={styles.card}>
                <figure>
                <Image alt="Logo"  src={logo}  width={100} height={40}  style={{ marginRight: 'auto' }} />      
                </figure>
                <div className={styles.contenidoCard}>
                <h3>Card 1</h3>
                <p>card 1 information</p>
                <p>card 1 information</p>
                </div>
            </a>

            <a href="#" className={styles.card}>
                <figure>
                <Image alt="Logo"  src={logo}  width={100} height={40}  style={{ marginRight: 'auto' }} />      
                </figure>
                <div className={styles.contenidoCard}>
                <h3>Card 2</h3>
                <p>card 2 information</p>
                <p>card 2 information</p>
                </div>
            </a>

            <a href="#" className={styles.card}>
                <figure>
                <Image alt="Logo"  src={logo}  width={100} height={40}  style={{ marginRight: 'auto' }} />      
                </figure>
                <div className={`${styles.contenidoCard} ${styles.col4}`}>
                <h3>Card 3</h3>
                <p>card 3 information</p>
                <p>card 3 information</p>
                </div>
            </a>


            <a href="/" className={styles.card}>
                <figure>
                <Image alt="Logo"  src={logo}  width={100} height={40}  style={{ marginRight: 'auto' }} />      
                </figure>
                <div className={styles.contenidoCard}>
                <h3>Card 4</h3>
                <p>card 4 information</p>
                <p>card 4 information</p>
                </div>
            </a>

            <a href="#" className={styles.card}>
                <figure>
                <Image alt="Logo"  src={logo}  width={100} height={40}  style={{ marginRight: 'auto' }} />      
                </figure>
                <div className={styles.contenidoCard}>
                <h3>Card 5</h3>
                <p>card 5 information</p>
                <p>card 5 information</p>
                </div>
            </a>

            <a href="#" className={styles.card}>
                <figure>
                <Image alt="Logo"  src={logo}  width={100} height={40}  style={{ marginRight: 'auto' }} />      
                </figure>
                <div className={`${styles.contenidoCard} ${styles.col4}`}>
                <h3>Card 6</h3>
                <p>card 6 information</p>
                <p>card 6 information</p>             
                </div>
            </a>

          </div>

    </div>

</div>
  </>
    )
}

