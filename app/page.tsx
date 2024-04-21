import Image from 'next/image'
import styles from './page.module.css'

export default function () {
  return (
    <main className={styles.main}>
      <h1>Kamol Travel</h1>
      <h2>
        175 Mott St <br/>
        Oceanside NY 11572
      </h2>
      <div className={styles.description}>
      
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <h1>Most reliable travel agents </h1>
      </div>

      
    </main>
  )
}
