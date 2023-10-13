import React from 'react'
import styles from './pages.module.css'

const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.submain}>
            <div>
                <p className={styles.text}>Your child can watch <br />unlimited video lessons without internet!</p>
                <p>Get the Education Tab 2 for children in Primary and Secondary school.</p>
                <div className={styles.buttoncont}>
                    <button>Buy via Whatsapp</button>
                    <button>Buy Online</button>
                </div>
            </div>
            <div></div>

        </div>
    </div>
  )
}

export default page