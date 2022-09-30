import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Haag Tech</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <img src="/logo.png" alt="Haag Tech" width="300px" heith="300px" />
          <div><font color="silver">site em construção</font></div>
      </main>


    </div>
  )
}
