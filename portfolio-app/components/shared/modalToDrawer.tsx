'use client'
import { Box, Modal, SwipeableDrawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@/public/closeIcon';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: '#1A1D1F',
    borderRadius: "20px",
    boxShadow: 24,
    border: "none",
    outline: "none",


};

const ModalToDrawer = ({ children, toggleDrawer, open, padding, borderRadius }: any) => {

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
                    <SwipeableDrawer anchor="bottom" open={open} onClose={toggleDrawer(false)} onOpen={() => console.log('')}
                        sx={{
                            '.MuiPaper-root': {
                                borderRadius: borderRadius ?? '0px',
                                background: "transparent",
                                boxShadow:"none"
                            }
                        }}>

                        <div style={{
                            position: "relative",
                            backgroundColor: "#1A1D1F",
                            marginTop: "21vh",
                            padding: '25px',
                            borderRadius: '20px 20px 0px 0px',
                        }}>
                            <div style={{backgroundColor:"silver", width:"40px", height:"4px",borderRadius:"10px", position:"absolute", left:"0", right:"0", margin:"0 auto", top:"10px"}}></div>
                            {/* <div style={{ position: "absolute", right: "20px", top: "20px", cursor: "pointer" }} onClick={toggleDrawer(false)}><CloseIcon /></div> */}
                            <div>
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
                        <Box sx={style} style={{
                            padding: padding ?? '24px',
                        }}>
                            <div style={{ position: "absolute", right: "20px", top: "20px", cursor: "pointer", background: "linear-gradient(90deg, rgb(29 29 29 / 0%) 32%, rgb(26 29 31) 32%)", width: "20px", height: "30px" }} onClick={toggleDrawer(false)}><CloseIcon /></div>
                            <Box sx={{
                                maxHeight: '80vh',
                                overflow: 'scroll',
                                paddingRight: '10px',
                                '&::-webkit-scrollbar': {
                                    backgroundColor: '#43474ab0',
                                    width: '8px',
                                    height: '0px',
                                    borderRadius: "20px",
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#7b7b7b',
                                    borderRadius: '20px',
                                },
                            }}>
                                {children}
                            </Box>
                        </Box>
                    </Modal>
            }




        </>
    )
}

export default ModalToDrawer