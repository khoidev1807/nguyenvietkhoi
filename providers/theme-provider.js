"use client"



import * as React from "react"
import { ThemeProvider } from "next-themes"


const NextThemeProvider = ({ children,...props}) => {
    return <ThemeProvider {...props}>{children}</ThemeProvider>
    }
export default  NextThemeProvider