import { ReactNode } from 'react'

interface HeaderIconsProps {
  link: string
  icon: ReactNode
}

export function HeaderAndFooterIcons({ link, icon }: HeaderIconsProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="max-h-8 max-w-[2rem] scale-150 cursor-pointer text-primaryLight transition-colors duration-500 hover:text-highlightLight dark:text-textLight dark:hover:text-primary sm:h-6 sm:w-6">
        {icon}
      </div>
    </a>
  )
}
