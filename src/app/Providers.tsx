'use client'

import { ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'

import { Header } from '../components/Header'
import { Whatsapp } from '../components/Whatsapp'
import { ButtonTop } from '../components/ButtonTop'
import { Toaster } from 'react-hot-toast'
import { Footer } from '../components/Footer'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-slate-200 font-sans dark:bg-[#11101b]">
        <Header />
        {children}
        <Whatsapp />
        <ButtonTop />
        <Toaster position="bottom-right" />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
