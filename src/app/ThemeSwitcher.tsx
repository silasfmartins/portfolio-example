'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <select
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        className="w-[70%] max-w-[10rem] rounded-lg border-none bg-slate-300/50 px-12 py-[0.8rem] text-black transition-colors duration-500 hover:bg-slate-300 dark:bg-slate-800/50 dark:text-white dark:hover:bg-slate-800"
      >
        <option
          className="rounded-lg border-none text-black transition-colors duration-500 dark:text-white"
          value="system"
        >
          System
        </option>
        <option
          className="rounded-lg border-none text-black transition-colors duration-500 dark:text-white"
          value="dark"
        >
          Dark
        </option>
        <option
          className="rounded-lg border-none text-black transition-colors duration-500 dark:text-white"
          value="light"
        >
          Light
        </option>
      </select>
    </>
  )
}
