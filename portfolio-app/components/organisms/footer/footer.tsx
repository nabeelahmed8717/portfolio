'use client'

import React, { useState } from 'react'
import styles from './footer.module.scss'
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from '@mui/material'
import HandHorns from '@/public/handHorns'
import VectorOne from '@/public/vectorone'
import WhatsappIcon from '@/public/icons/social/whatsapp'
import TwitterIcon from '@/public/icons/social/twitter'
import InstagramIcon from '@/public/icons/social/instagram'
import MailIcon from '@/public/icons/social/mail'
import LinkedinIcon from '@/public/icons/social/linkedin'
import CopyrightIcon from '@/public/icons/copyright'
import ModalToDrawer from '@/components/shared/modalToDrawer'

import rocketImage from '../../../public/images/rocket.png'


import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Image from 'next/image'




const Footer = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: any) => () => {
    setOpen(isOpen);
  };



  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    projectType: yup.string().required('Type of Project is required'),
    budget: yup.string().required('Budget is required'),
    // description: yup.string().required('description is required'),
  });


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      projectType: '',
      budget: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });




  return (
    <Box className={styles.footerWrapper}>
      <Box className={styles.footerInset} data-aos="flip-up">
        <h3 className='white-color fs-29'>Start a project</h3>
        <p className='white-color fs-18 text-center'>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
        <Button onClick={toggleDrawer(true)}>
          <HandHorns />&nbsp; Lets do this
        </Button>
      </Box>
      <Box className={styles.mainFooter}>
        <VectorOne color='white' />
        <p className='white-dull fs-22 text-center' style={{ width: "273px", marginTop: "20px" }}>Living, learning, & leveling up one day at a time.</p>
        <Box className={styles.socialIcons}>
          <Button><WhatsappIcon /></Button>
          <Button><TwitterIcon /></Button>
          <Button><InstagramIcon /></Button>
          <Button><MailIcon /></Button>
          <Button><LinkedinIcon /></Button>
        </Box>
        <p className='white-dull fs-18 text-center flex align-center' style={{ marginTop: "57px", gap: "5px" }}>Handcrafted by me <CopyrightIcon /> twentytwentyfour</p>
      </Box>


      <ModalToDrawer toggleDrawer={toggleDrawer} open={open}>
        <div>
          <div className='flex justify-center'>
            <Image src={rocketImage} width={100} alt={''} />
          </div>
          <h2 className='fs-32 fw-500 text-center' style={{ marginBottom: "40px", marginTop: "20px", color:"#fff" }}>
            {"I’m excited to learn about your project."} <br /> <span style={{color:"#c8f31d"}}>Ready to get started?</span> 
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography style={{ color: "rgb(158 158 158)", marginBottom: "10px" }}>Your Name</Typography>
                <TextField
                  placeholder="Type here"
                  variant="outlined"
                  fullWidth
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  sx={{
                    color: "#fff",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography style={{ color: "rgb(158 158 158)", marginBottom: "10px" }}>Your Email</Typography>
                <TextField
                  placeholder="Type here"
                  variant="outlined"
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{
                    color: "#fff",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth error={formik.errors.projectType ? true : false}>
                  <Typography style={{ color: "rgb(158 158 158)", marginBottom: "10px" }}>Type of project</Typography>
                  <Select
                    labelId="project-type-select-helper-label"
                    variant="outlined"
                    placeholder='ssdsd'
                    fullWidth
                    id="projectType"
                    name="projectType"
                    value={formik.values.projectType}
                    onChange={formik.handleChange}
                    error={formik.touched.projectType && Boolean(formik.errors.projectType)}
                    sx={{
                      color: "#fff",
                    }}
                  >
                    <MenuItem value="" disabled>Select</MenuItem>
                    <MenuItem value="responsive design">Responsive Design</MenuItem>
                    <MenuItem value="web app">Web app</MenuItem>
                    <MenuItem value="mobile app">Mobile app</MenuItem>
                    <MenuItem value="web repair">Web Repair</MenuItem>
                  </Select>
                  {formik.errors.projectType && <FormHelperText sx={{ color: "red" }}>{formik.errors.projectType}</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth error={formik.errors.budget ? true : false}>
                  <Typography style={{ color: "rgb(158 158 158)", marginBottom: "10px" }}>Budget</Typography>
                  <Select
                    labelId="project-type-select-helper-label"
                    // label="Budget"
                    variant="outlined"
                    fullWidth
                    id="budget"
                    name="budget"
                    value={formik.values.budget}
                    onChange={formik.handleChange}
                    error={formik.touched.budget && Boolean(formik.errors.budget)}
                    sx={{
                      color: "#fff",
                    }}
                  >
                    <MenuItem value="" disabled>Select</MenuItem>
                    <MenuItem value="admin">-$500</MenuItem>
                    <MenuItem value="admin">$500 - $1,000</MenuItem>
                    <MenuItem value="admin">$1,000 - $5,000</MenuItem>
                    <MenuItem value="admin">5,000+</MenuItem>
                  </Select>
                  {formik.errors.budget && <FormHelperText sx={{ color: "red" }}>{formik.errors.budget}</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography style={{ color: "rgb(158 158 158)", marginBottom: "10px" }}>Description</Typography>
                <TextField
                  multiline
                  minRows={3}
                  placeholder="Description of your project"
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  fullWidth
                  sx={{
                    color: "#fff",
                  }}
                />
              </Grid>

            </Grid>



            <Box sx={{ mt: 4 }} className='flex justify-center'>
              <Button type="submit" variant="outlined" color="primary" style={{ padding: "11px 35px" }}>
                Submit
              </Button>
            </Box>
          </form>

        </div>
      </ModalToDrawer>

    </Box>
  )
}

export default Footer