
'use client'
/* eslint-disable */
import React, { useEffect, useState } from 'react'
import styles from './landingPage.module.scss'
import profileVector from '@/public/images/vectorprofile.png'
import javaScriptIcon from '@/public/images/javascript.png'
import htmlIcon from '@/public/images/html.png'
import cssIcon from '@/public/images/css.png'
import reactIcon from '@/public/images/reactjs.png'
import nodeIcon from '@/public/images/nodejs.png'
import gitIcon from '@/public/images/git.png'
import { Box, Button, Grid, IconButton, useMediaQuery } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import ModalToDrawer from '@/components/shared/modalToDrawer'
import Link from 'next/link'
import LinkIcon from '@/public/icons/link'
import { workDone } from '@/mock/landingpage'


const skillsData = [
  {
    label: "Javascript",
    icon: javaScriptIcon,
    progress: "85%"
  },
  {
    label: "HTML",
    icon: htmlIcon,
    progress: "90%"
  },
  {
    label: "CSS",
    icon: cssIcon,
    progress: "95%"
  },
  {
    label: "NodeJS",
    icon: nodeIcon,
    progress: "40%"
  },
]

const skillsLanguages = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'HTML',
  'CSS / SCSS',
  'Cross-Browser Compatibility',
  'Deployment',
];

const skillsFrameworks = [
  'React-router-dom',
  'Redux',
  'React Hook Form',
  'RTK Query',
  'Material UI',
  'Ant Design',
  'Tailwind CSS',
  'RTK Query',
  'Socket.io',
  'Joi',
  'Lodash',
  'Jest',
  'SCSS',
  'Bootstrap',
  'Styled Components'
];

const skillsTools = [
  'VS Code',
  'AWS',
  'Bitbucket',
  'GitHub',
  'Git',
  'Redux DevTools',
  'npm',
  'Jira',
  'Vercel',
  'Swagger',
  'Figma',
  'Adobe Photoshop'
];



const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      // duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const matches = useMediaQuery('(max-width:800px)');

  const [open, setOpen] = useState(false);


  const [projectData, setProjectData] = useState<any>({})

  const toggleDrawer = (isOpen: any) => () => {
    setOpen(isOpen);
  };


  const handelProjectCardClicked = (att: any) => {
    if (att) {
      setProjectData(att)
      setOpen(true)
    }

  };

  return (
    <Box className={styles.landingPageMain}>
      <Box className={styles.lines}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Box>

      <Box className={styles.mainProfileBox} data-aos="fade-right">
        <Box className={styles.profileCard}>
          <Image src={profileVector} className={styles.profileImage} width={matches ? 150 : 200} alt='profile-image' />
          <Image src={javaScriptIcon} className={styles.floatingImages1} alt='profile-image' />
          <Image src={htmlIcon} className={styles.floatingImages2} alt='profile-image' />
          <Image src={cssIcon} className={styles.floatingImages3} alt='profile-image' />
          <Image src={reactIcon} className={styles.floatingImages4} alt='profile-image' />
          <Image src={nodeIcon} className={styles.floatingImages5} alt='profile-image' />
          <Image src={gitIcon} className={styles.floatingImages6} alt='profile-image' />
        </Box>
        <Box className={styles.profileContent} >
          <h1>
            Hello, Im <span className="color-green">Nabeel Ahmed</span>, Website Developer and <br /> <span className="board-res">Graphics Designer <i></i><i></i></span>
          </h1>



          <Box sx={{ position: "relative", mt: 6, display: "flex", flexWrap: matches ? 'wrap' : '', gap: "10px" }}>
            <Button fullWidth={matches ? true : false} className={styles.sayhelloBtn}>Say hello</Button>
            <Button fullWidth={matches ? true : false} className={styles.downloadCvBtn}>Download CV</Button>
          </Box>

        </Box>
      </Box>

      <Box className={styles.mySkills} >
        <Box className={styles.aboutMe}>
          <Box className={styles.aboutmeHead}>
            <h2>About me</h2>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
          </Box>

          <Box sx={{ padding: "40px", mt: 5 }}>

            <Grid container spacing={6}>
              <Grid item sm={12} md={5} lg={5}>
                <Box className={styles.aboutInfo}>
                  <h2>Get to know me!</h2>
                  <p>As a seasoned Frontend Web Developer with over 5 years in the industry, I specialize in creating visually striking and user-centric interfaces. My expertise lies in translating design concepts into responsive and high-performance websites and applications. I stay abreast of industry trends, ensuring that my work aligns with current standards while anticipating future needs. Committed to delivering excellence, I bring a proven track record of successful collaborations and a passion for enhancing overall user experiences. Let's elevate your digital presence together.</p>
                </Box>
              </Grid>
              <Grid item sm={12} md={7} lg={7}>
                <Box className={styles.mySkillsProgress}>
                  <h2>Skills</h2>
                  <Box className={styles.mySkillsProgressWrapper}>


                    <Grid container spacing={2}>
                      {
                        skillsData.map((item: any, index: any) => (
                          <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
                            <Box className={styles.mySkillsProgressWrapperBox} data-aos="zoom-in">
                              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <Image src={item?.icon} width={30} alt='javascript' />
                                <h3 style={{ fontSize: "16px", fontWeight: "600" }}>{item.label}</h3>
                              </Box>
                              <Box sx={{
                                position: "absolute", bottom: "0",
                                width: "83%",
                                margin: "0 auto",
                                left: "0",
                                right: "0",
                              }}>
                                <ProgressCustom progress={item.progress} />
                              </Box>
                              <Box className={styles.progressChip}>{item.progress}</Box>
                            </Box>
                          </Grid>
                        ))
                      }


                    </Grid>



                  </Box>
                </Box>
              </Grid>
            </Grid>

          </Box>
        </Box>


        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box className={styles.languagesAndTech}>
            <Box className={styles.upperGrp}></Box>
            <Box className={styles.lowerGrp}></Box>
            <Box className={styles.languagesAndTechHead}>
              <h3>
                Technologies
              </h3>
              <p><span>Languages and FrameWorks</span> I Use</p>
            </Box>

            <Box className={styles.lg3ChipWrapper} data-aos="fade-up">
              {
                skillsLanguages.map((item: any, key: any) => (
                  <Box className={styles.chip} key={key}>{item}</Box>
                ))
              }
            </Box>
            <Box className={styles.lg3ChipWrapper} data-aos="fade-up">
              {
                skillsFrameworks.map((item: any, key: any) => (
                  <Box className={styles.chip} key={key}>{item}</Box>
                ))
              }
            </Box>
            <Box className={styles.lg3ChipWrapper} data-aos="fade-up">
              {
                skillsTools?.map((item: any, key: any) => (
                  <Box className={styles?.chip} key={key}>{item}</Box>
                ))
              }
            </Box>

          </Box>
        </Box>


        <Box className={styles?.myPortfolio}>
          <Box className={styles?.myPortfolioHead}>
            <h3>Our Portfolio</h3>
            <p>Look at my work & <br /> give <span>your feedback</span></p>
          </Box>

          <Grid container spacing={6}>
            {
              workDone?.map((item: any, key: any) => (
                <Grid item sm={12} md={6} lg={4} key={key} onClick={() => handelProjectCardClicked(item)}>
                  <Box className={styles?.productMainWrapper} data-aos="zoom-in-up">
                    <Box className={styles?.productMainBox}>
                      <Image src={item?.image} alt='-' />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Box className={styles?.productChip}>{item.chip}</Box>
                      <Link href={item?.link} target='_blank'>
                        <IconButton>
                          <LinkIcon />
                        </IconButton>
                      </Link>
                    </Box>
                    <h4>{item.label}</h4>
                  </Box>
                </Grid>
              ))
            }

          </Grid>


        </Box>


      </Box>


      <ModalToDrawer toggleDrawer={toggleDrawer} open={open} padding={'20px'} borderRadius='20px 0px 20px 0px'>
        <Box className={styles.projectInfoModal}>
          <Box className={styles.imageWrapper}>
            <Image src={projectData?.image} alt='--' />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "30px" }}>
              <h2>{projectData?.label}</h2>
              <Box className={styles.productChip}>{projectData.chip}</Box>
            </Box>
            <Link href={projectData?.link ?? "./"} target='_blank'><LinkIcon color='#52cfa9' /></Link>
          </Box>
          <Box className={styles?.description}>
            <div
              dangerouslySetInnerHTML={{ __html: projectData?.detailedDescription }}
            />
          </Box>

          <Box mt={3}>
            <h4 style={{ fontSize: "15px", fontWeight: "500" }}>Languages and Frameworks used</h4>
            <Box className={styles.lg4ChipWrapper} >
              {
                projectData?.languagesUsed?.map((item: any, index: any) => (
                  <Box className={styles.chip} key={index} >{item}</Box>
                ))
              }
            </Box>

          </Box>
          <Box mt={3}>
            <h4 style={{ fontSize: "15px", fontWeight: "500" }}>Tools used</h4>
            <Box className={styles.lg4ChipWrapper} >
              {
                projectData?.toolsUsed?.map((item: any, index: any) => (
                  <Box className={styles?.chip} key={index}>{item}</Box>
                ))
              }
            </Box>
          </Box>

          <Box sx={{
            background: "#52cfa921",
            borderRadius: "12px",
            padding: "20px",
            marginTop: "47px",
            marginBottom: "1px",
          }}>
            <h3 style={{ color: "#FFF", fontSize: "14px", fontWeight: "500" }}>You Reached at the end of content</h3>
            <h4 style={{ color: "#52cfa9", fontSize: "14px", fontWeight: "500" }}>Thanks for Reading</h4>

          </Box>
        </Box>
      </ModalToDrawer >

    </Box >
  )
}

const ProgressCustom = ({ progress }: any) => {
  return (
    <Box sx={{
      backgroundColor: "#343434",
      width: "100%",
      height: "3px",
      borderRadius: "10px",
      overflow: "hidden"
    }}>
      <Box sx={{
        background: "#fff",
        width: progress,
        height: "100%"
      }}></Box>
    </Box>
  )
}

export default LandingPage