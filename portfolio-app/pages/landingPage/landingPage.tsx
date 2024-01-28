
'use client'
import React, { useEffect, useState } from 'react'
import styles from './landingPage.module.scss'
import UserIcon from '@/public/user'
import Image from 'next/image'
import heroDevicesSvg from '../../public/heroDevices.svg'
import smdWrapperImage from '../../public/images/smd-wrapper.png'
import rndWrapperImage from '../../public/images/rnd-wrapper.png'
import plWrapperImage from '../../public/images/pl-wrapper.png'
import ehbWrapperImage from '../../public/images/ehb-wrapper.png'
import clockLogWrapperImage from '../../public/images/clocklog-wrapper.png'
import aacWrapperImage from '../../public/images/aac-wrapper.png'


import quiklersLogo from '../../public/icons/quiklers.svg'
import skoodexLogo from '../../public/icons/skoodex.svg'
import stolenCelLogo from '../../public/icons/stolencel.svg'

import { Box, Grid } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import SkillsContainer from '@/components/molecules/skillsContainer/skillsContainer'
import ArrowUpRight from '@/public/arrowUpRight'
import GitBranch from '@/public/gitBranch'
import BulbIdea from '@/public/bulbIdea'

import AOS from 'aos';
import 'aos/dist/aos.css';

const developmentSkills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'HTML',
  'CSS / SCSS',
  'Analytics',
  'Responsive Design',
  'Cross-Browser Compatibility',
  'Deployment',
  'Debugging'
];
const frameWorksLibraries = [
  'React-router-dom',
  'Redux',
  'React Hook Form',
  'RTK Query',
  'Material UI',
  'Ant Design',
  'Tailwind CSS',
  'Formik',
  'RTK Query',
  'Socket.io',
  'Joi',
  'Lodash',
  'Jest',
  'SCSS',
  'Bootstrap',
  'Styled Components',
];

const developerTools = [
  'VS Code',
  'Visual Studio',
  'AWS Code Commit',
  'Bitbucket',
  'GitHub',
  'Git',
  'React Developer Tools',
  'Redux DevTools',
  'Sublime Text',
  'npm',
  'Jira',
  'Vercel',
  'Swagger',
  'Figma',
  'Adobe Photoshop',
];

interface IRECENTPROJECTS {
  title: string;
  description: string;
  Image: any;
  link: string;
}

const recentProjects: IRECENTPROJECTS[] = [
  {
    title: "Share My Dine (SMD)",
    description: "An application where you Discover great food and dining experiences near you!",
    Image: smdWrapperImage,
    link: '',
  },
  {
    title: "RND Tax Claims",
    description: "R&D tax relief can reduce your corporation tax or lead to a payable tax credit. This guidance is for SMEs making a claim.",
    Image: rndWrapperImage,
    link: '',
  },
  {
    title: "Personal Library (Sale Site)",
    description: "R&D tax relief can reduce your corporation tax or lead to a payable tax credit. This guidance is for SMEs making a claim.",
    Image: plWrapperImage,
    link: '',
  },
  {
    title: "ClockLog",
    description: "Time tracking tools for employee to track their productive time",
    Image: clockLogWrapperImage,
    link: '',
  },
  {
    title: "Air Apple Cart",
    description: "Sales and marketing service provider for companies",
    Image: aacWrapperImage,
    link: '',
  },
  {
    title: "EHB (Education Health Business)",
    description: "EHB is an online tech-driven hub connecting global professionals and service providers",
    Image: ehbWrapperImage,
    link: '',
  },
]


const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      // duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 0);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className={styles.landingPageMain}>
      <Box className={styles.landOpener}>
        <h2 className='fs-40 fw-900 title-color' style={{ marginTop: "16vh" }} data-aos="zoom-in" data-aos-duration="500">
          HEY, I'M NABEEL AHMED
        </h2>
        <p className={`${styles.textHero} text-primary fs-22`} data-aos="zoom-in" data-aos-duration="600">
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. 🚀
        </p>
        <Box data-aos="zoom-in" data-aos-duration="600">
          <UserIcon />
        </Box>

        {!isHidden &&
          <div className={styles.scrollCcv} data-aos="fade-down">
            <div className={styles.ranMouse}><div className={styles.mouseScroll}></div></div>
            <p>Scroll Down</p>
          </div>}

      </Box>
      <Box className={styles.aboutSection} id='about'>
        <Box className={`${styles.aboutImage} 'flex align-center justify-center'`} data-aos="fade-up">
          <Image src={heroDevicesSvg} width={600} alt={''} />
        </Box>
        <Box className={styles.sectionMainAbout} sx={{ height: "544px" }}>
          <h2 className='white-color fs-29' data-aos="zoom-in">About me</h2>
          <p className='white-dull fs-18' data-aos="zoom-in">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </Box>
        <Box className={styles.sectionMainAboutExtended}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Box>
                <h2 className='fs-22 title-color' style={{ marginBottom: "10px" }}>Get to know me!</h2>
                <p className='fs-16 text-primary'>As a seasoned Frontend Web Developer with over 5 years in the industry, I specialize in creating visually striking and user-centric interfaces. My expertise lies in translating design concepts into responsive and high-performance websites and applications. I stay abreast of industry trends, ensuring that my work aligns with current standards while anticipating future needs. Committed to delivering excellence, I bring a proven track record of successful collaborations and a passion for enhancing overall user experiences. Let's elevate your digital presence together.</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Box>
                <h2 className='fs-22 title-color' style={{ marginBottom: "30px" }}>My Skills 🎯</h2>
                <Box data-aos="fade-left">
                  <SkillsContainer data={developmentSkills} colorScheme={'green'} mb={'30px'} title={'Development'} />
                </Box>
                <Box data-aos="fade-left">
                  <SkillsContainer data={frameWorksLibraries} colorScheme={'blue'} mb={'30px'} title={'Libraries & Frameworks'} />
                </Box>
                <Box data-aos="fade-left">
                  <SkillsContainer data={developerTools} colorScheme={'ocean'} mb={'30px'} title={'Developer Tools'} />
                </Box>

              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <h2 className='title-color fs-29' style={{ textAlign: "center", margin: "120px 0px 10px 0px" }} data-aos="zoom-in">My Recent Work</h2>
        <p className='title-color fs-18' style={{ textAlign: "center", margin: "0px 0px 80px 0px" }} data-aos="zoom-in">Here are a few past design projects I've worked on. Want to see more? <span className='link-color'>Email me</span> .</p>
        <Box className={styles.wrapperRecentWork}>
          <Grid container spacing={4}>
            {
              recentProjects.map((item) => (
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Box className={styles.bxCardsProjects} data-aos="zoom-in">
                    <Image src={item.Image} width={120} alt='' style={{ borderRadius: "8px" }} />
                    <Box >
                      <h3>{item.title} <ArrowUpRight color='#9b9b9b' size='15' /> </h3>
                      <p className='text-primary fs-14'>{item.description}</p>
                    </Box>
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>

      <Box className={styles.aboutSection} id='startups' sx={{ marginTop: "120px" }}>
        <Box className={styles.sectionMainAbout} sx={{ height: "444px" }}>
          <h2 className='white-color fs-29' data-aos="zoom-in">My Startup Projects</h2>
          <p className='white-dull fs-18' data-aos="zoom-in">I'm a bit of a digital product junky. Over the years I've used a lot of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to design and build my own.</p>
        </Box>
        <Box className={styles.sectionMainStartupExtended}>
          <Grid container spacing={4}>

            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={styles.startupDisCards} data-aos="fade-up">
                <Image src={quiklersLogo} width={110} alt={''} />
                <p className='fs-16 text-primary text-center' style={{ height: "85px" }}>Transforming local service provision for the contemporary era by introducing innovative solutions tailored to modern needs.</p>
                <Box className={styles.tag}> <GitBranch /> &nbsp; in development</Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={styles.startupDisCards} data-aos="fade-up">
                <Image src={skoodexLogo} width={110} alt={''} />
                <p className='fs-16 text-primary text-center' style={{ height: "85px" }}>A comprehensive school management platform designed to foster collaboration among schools, teachers, and parents, aiming to enhance student performance.</p>
                <Box className={styles.tag}> <BulbIdea /> &nbsp; validating idea</Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={styles.startupDisCards} data-aos="fade-up">
                <Image src={stolenCelLogo} width={110} alt={''} />
                <p className='fs-16 text-primary text-center' style={{ height: "85px" }}>A sophisticated application designed to facilitate the recovery of lost or stolen mobile devices through collaborative efforts with local retailers and shopkeepers.</p>
                <Box className={styles.tag}> <BulbIdea /> &nbsp; validating idea</Box>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Box>
      
    </Box>
  )
}

export default LandingPage