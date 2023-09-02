import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Haag Tech</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="../vendor/chatwebsite.js" defer />
      </Head>

      <main className={styles.main}>
          <img src="/logo.png" alt="Haag Tech" width="300px" heith="300px" />
          <div><font color="silver">Site em construção</font></div>
      </main>


    </div>
  )
}
