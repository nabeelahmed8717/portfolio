'use client'
import VectorOne from '@/public/vectorone'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import { Button } from '@mui/material'
import MenuIcon from '@/public/menuIcon'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleViewportChange(event: any) {
      setIsMobile(event.matches);
    }
    handleViewportChange(mediaQuery);
    mediaQuery.addListener(handleViewportChange);
    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);
  return (
    <div className={styles.navbarMain}>
      <div className={`${styles.innerWrapper}  flex justify-between align-center`} style={{ padding: "20px 0px" }}>
        <VectorOne />
        {
          !isMobile ?
          <div>
              <div className={`${styles.navItems} flex align-center`} style={{ gap: "30px" }}>
                <div className='flex align-center fs-18' style={{ gap: "25px" }}>
                  <p>Home</p>
                  <a href="#about"><p>About</p></a>

                  <p>Projects</p>
                  <p>Contact</p>
                </div>
                <Button variant='outlined' style={{ textTransform: "capitalize" }} className='fs-18'>Say Hello</Button>
              </div>
            </div>
          :
          <MenuIcon />
            
        }


      </div>
    </div>
  )
}

export default Navbar