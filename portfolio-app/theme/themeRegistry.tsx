'use client'

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { NextAppDirEmotionCacheProvider } from './emotionCache'

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#583AF1', // Your primary color
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
                    height:"fit-content"
                },
                outlined: {
                    color: '#583AF1', // Text color
                    borderColor: '#583AF1', // Border color
                    borderWidth: '2px', // Border width
                    '&:hover': {
                        backgroundColor: '#583AF1', // Background color on hover
                        borderWidth: '2px',
                        color: '#fff',
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