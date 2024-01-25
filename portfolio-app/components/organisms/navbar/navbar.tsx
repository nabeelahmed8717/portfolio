import VectorOne from '@/public/vectorone'
import React from 'react'
import styles from './navbar.module.scss'
import { Button } from '@mui/material'

const Navbar = () => {
  return (
    <div className={styles.navbarMain}>
      <div className={`${styles.innerWrapper}  flex justify-between align-center`} style={{padding:"20px 0px"}}>
        <VectorOne />
        <div>
          <div className={`${styles.navItems} flex align-center` }  style={{gap:"30px"}}>
            <div className='flex align-center fs-18' style={{gap:"25px"}}>
              <p>Home</p>
              <p>About</p>
              <p>Projects</p>
              <p>Contact</p>
            </div>
            <Button variant='outlined' style={{textTransform:"capitalize"}} className='fs-18'>Say Hello</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar