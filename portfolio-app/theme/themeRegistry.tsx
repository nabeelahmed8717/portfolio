'use client'

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { NextAppDirEmotionCacheProvider } from './emotionCache'

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#C8F31D', // Your primary color
        },
        secondary: {
            main: '#16a085', // Your secondary color
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '30px',
                    height:"fit-content",
                    fontSize:"15px",
                },
                outlined: {
                    color: '#fff', // Text color
                    borderColor: 'transparent', // Border color
                    borderWidth: '2px', // Border width
                    background:"#ffffff24",
                    '&:hover': {
                        backgroundColor: '#fff', // Background color on hover
                        borderWidth: '2px',
                        borderColor: 'transparent',
                        color: '#000',
                    },
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#1A1D1F',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '8px !important',
                    backgroundColor:"#272B30",
                    color:"#fff",
                },
                input: {
                    height: '11px',
                    color:"#fff",
                    '&::placeholder': {
                        opacity: 1,
                        color: '#999',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    transition:"0.3s",
                    color:"#fff",
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#272B30',
                    },
                    '&.Mui-disabled': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor:' #272B30',
                        },
                    },
                },
            },
        },
        
    },
}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>

    )
}