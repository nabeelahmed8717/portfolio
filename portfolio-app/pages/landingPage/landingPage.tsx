import React from 'react'
import styles from './landingPage.module.scss'
import UserIcon from '@/public/user'

const LandingPage = () => {
  return (
    <div className={styles.landingPageMain}>
      <div className={styles.landOpener}>
        <h2 className='fs-40 fw-900 title-color'>
          HEY, I'M NABEEL AHMED
        </h2>
        <p className={`${styles.textHero} text-primary fs-22`}>
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
        </p>
        <UserIcon/>
      </div>
    </div>
  )
}

export default LandingPage