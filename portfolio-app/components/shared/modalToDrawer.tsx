'use client'
import { Box, IconButton, Modal, SwipeableDrawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './modalToDrawer.module.scss'
import CloseIcon from '@/public/closeIcon';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: "20px",
    boxShadow: 24,
    p: 7,
};

const ModalToDrawer = ({ children, toggleDrawer, open }: any) => {

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
        <>
            {
                isMobile ?
                    <SwipeableDrawer anchor="bottom" open={open} onClose={toggleDrawer(false)} onOpen={() => console.log('')}>
                        <div>
                        <div style={{ position: "absolute", right: "20px", top: "20px", cursor: "pointer" }} onClick={toggleDrawer(false)}><CloseIcon /></div>
                            <div style={{padding:"20px"}}>
                            {children}
                            </div>
                        </div>
                    </SwipeableDrawer>
                    :
                    <Modal
                        open={open}
                        onClose={toggleDrawer(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div style={{ position: "absolute", right: "20px", top: "20px", cursor: "pointer" }} onClick={toggleDrawer(false)}><CloseIcon /></div>
                            {children}
                        </Box>
                    </Modal>
            }




        </>
    )
}

export default ModalToDrawer