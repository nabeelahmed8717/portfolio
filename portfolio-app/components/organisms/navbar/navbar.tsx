'use client'
import VectorOne from '@/public/vectorone'
import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, SwipeableDrawer, TextField, TextareaAutosize } from '@mui/material'
import MenuIcon from '@/public/menuIcon'
import CloseIcon from '@/public/closeIcon'
import ModalToDrawer from '@/components/shared/modalToDrawer'
import { useFormik } from 'formik'
import * as yup from 'yup';
import styles from './navbar.module.scss'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isResMenu, setIsResMenu] = useState(false);
  const [isContactModal, setIsContactModal] = useState(false);

  const toggleDrawer = (isContactModal: any) => () => {
    setIsContactModal(isContactModal);
  };

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



  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    description: yup.string().required('description is required'),
  });


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
                  <a href="#projects"><p>Projects</p></a>
                  <p>Contact</p>
                </div>
                <Button variant='outlined' style={{ textTransform: "capitalize" }} className='fs-18' onClick={() => setIsContactModal(true)}>Say Hello</Button>
              </div>
            </div>
            :
            <Box onClick={() => setIsResMenu(true)}>
              <MenuIcon />
            </Box>

        }


      </div>

      <ModalToDrawer toggleDrawer={toggleDrawer} open={isContactModal}>



        <div className='flex justify-center'>
          {/* <Image src={rocketImage} width={100} alt={''} /> */}
        </div>
        <h2 className='fs-32 fw-500 text-center' style={{ marginBottom: "40px", marginTop: "20px" }}>
          {"Thanks for taking the time to reach out. How can I help you today?"}
        </h2>

        <form onSubmit={formik.handleSubmit}>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>




            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Description of your project"
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                style={{ width: '100%', padding: '10px', marginTop: '10px', resize: 'none', outline: "none", borderColor: formik.touched.email && Boolean(formik.errors.email) ? "#d32f2f" : " rgba(0, 0, 0, 0.23)", borderRadius: "4px", fontFamily: 'Inter' }}
              />
              {(formik.touched.email && formik.errors.email) && <span style={{
                color: "#d32f2f",
                fontWeight: 400,
                fontSize: '0.75rem',
                lineHeight: '1.66',
                letterSpacing: '0.03333em',
                textAlign: 'left',
                marginTop: '3px',
                marginRight: '14px',
                marginBottom: '0',
                marginLeft: '14px',
              }}>{formik.touched.email && formik.errors.email}</span>}
            </Grid>

          </Grid>



          <Box sx={{ mt: 4 }} className='flex justify-center'>
            <Button type="submit" variant="outlined" color="primary" style={{ padding: "11px 35px" }}>
              Submit
            </Button>
          </Box>
        </form>
      </ModalToDrawer>

      <SwipeableDrawer anchor="left" open={isResMenu} onClose={() => setIsResMenu(false)} onOpen={() => console.log('')}>
        <div>
          <div style={{ position: "absolute", right: "20px", top: "20px", cursor: "pointer" }} onClick={() => setIsResMenu(false)}><CloseIcon /></div>
          <div style={{ padding: "20px", width: "85vw", display: "flex", alignItems: "center", justifyContent: "center", height: "60vh" }}>
            <div className={`${styles.navResMenu} flex align-center fs-24`} style={{ gap: "25px", flexDirection: "column" }}>
              <p className='fs-24' onClick={() => setIsResMenu(false)}>Home</p>
              <a href="#about" onClick={() => setIsResMenu(false)}><p className='fs-24'>About</p></a>
              <a href="#projects" onClick={() => setIsResMenu(false)}><p className='fs-24'>Projects</p></a>
              <p className='fs-24' onClick={() => {setIsResMenu(false); setIsContactModal(true)}}>Contact</p>

              <Button variant='outlined' style={{ textTransform: "capitalize" }} className='fs-18' onClick={() => {setIsContactModal(true); setIsResMenu(false)}}>Say Hello</Button>
            </div>
          </div>
        </div>
      </SwipeableDrawer>

    </div>
  )
}

export default Navbar