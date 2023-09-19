import React from 'react'
import styles from '../Styles/PageLead.module.scss'



function PageLead({text1, text2, text3}) {
  return (
    <div className='container'>
        <div className={styles.textWrapper}>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
        </div>
    </div>
  )
}

export default PageLead