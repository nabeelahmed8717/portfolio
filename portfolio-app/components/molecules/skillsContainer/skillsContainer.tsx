'use client'
import React, { useState } from 'react'
import styles from './skillsContainer.module.scss'
import { Box, Button } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

const SkillsContainer = ({ data, colorScheme, mb, title }: any) => {

    const [showAll, setShowAll] = useState(false);

    const visibleData = showAll ? data : data.slice(0, 11);
    const remainingCount = data.length - visibleData.length;

    const containerTheme: any = {
        'green': styles.wrapperGreen,
        'blue': styles.wrapperBlue,
        'ocean': styles.wrapperOcean,
    }

    return (
        <Box className={`${styles.skillsWrapper} ${containerTheme[colorScheme]}`} style={{ marginBottom: mb }}>
            <p>{title}</p>
            <Box className={styles.wrapperDevBadges}>
                {visibleData.map((item: any) => (
                    <Box key={uuidv4()} className={styles.wrapperDevBadgesInset}>{item}</Box>
                ))}
                {data.length > 11 && !showAll && (
                    <Button className={styles.viewMore} onClick={() => setShowAll(true)}>
                        +({remainingCount}) More 
                    </Button>
                )}
                {/* <Box key={uuidv4()} className={styles.wrapperDevBadgesInset}>More</Box> */}
            </Box>
        </Box>
    )
}

export default SkillsContainer