import React from 'react'
import styles from './landingPage.module.scss'
import UserIcon from '@/public/user'
import Image from 'next/image'
import heroDevicesSvg from '../../public/heroDevices.svg'
import { Box, Grid } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import SkillsContainer from '@/components/molecules/skillsContainer/skillsContainer'

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


const LandingPage = () => {
  return (
    <Box className={styles.landingPageMain}>
      <Box className={styles.landOpener}>
        <h2 className='fs-40 fw-900 title-color'>
          HEY, I'M NABEEL AHMED
        </h2>
        <p className={`${styles.textHero} text-primary fs-22`}>
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. 🚀
        </p>
        <UserIcon />
      </Box>
      <Box className={styles.aboutSection}>
        <Box className='flex align-center justify-center'>
          <Image src={heroDevicesSvg} width={600} alt={''} />
        </Box>
        <Box className={styles.sectionMainAbout}>
          <h2 className='white-color fs-29'>About me</h2>
          <p className='white-dull fs-18'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
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
                <h2 className='fs-22 title-color' style={{ marginBottom: "30px" }}>My Skills</h2>

                <SkillsContainer data={developmentSkills} colorScheme={'green'} mb={'30px'} title={'Development'} />
                <SkillsContainer data={frameWorksLibraries} colorScheme={'blue'} mb={'30px'} title={'Libraries & Frameworks'} />
                <SkillsContainer data={developerTools} colorScheme={'ocean'} mb={'30px'} title={'Developer Tools'} />

              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
      <h2 className='title-color fs-29' style={{textAlign:"center", margin:"60px 0px 20px 0px"}}>My Recent Work</h2>
      </Box>
    </Box>
  )
}

export default LandingPage