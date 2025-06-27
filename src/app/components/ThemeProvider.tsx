'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
// Import the props type from the library
import { type ThemeProviderProps } from 'next-themes/dist/types'

// Update the function to accept props
export function ThemeProvider({ children, ...props }: ThemeProviderProps) { 
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Pass the received props down to the provider
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}