import { ReactNode } from 'react'

export interface SectionTitleProps {
  title: string | ReactNode
  description?: string | ReactNode
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div
      data-aos="fade-right"
      className="flex w-full flex-col items-start gap-2 md:items-center"
    >
      <h1 className="text-7xl text-primaryLight transition-colors duration-500 dark:text-primary sm:text-4xl emd:text-5xl esd:text-3xl">
        {title}
      </h1>
      {description && (
        <h2 className="text-[2.5rem] font-light text-secondary transition-colors duration-500 sm:text-xl emd:text-base esd:text-lg">
          {description}
        </h2>
      )}
    </div>
  )
}
