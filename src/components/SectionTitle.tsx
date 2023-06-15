import { ReactNode } from 'react'

export interface SectionTitleProps {
  title: string | ReactNode
  description?: string | ReactNode
}

export function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div
      data-aos="fade-right"
      className="w-full flex flex-col items-start gap-2 md:items-center"
    >
      <h1 className="dark:text-primary text-primaryLight text-7xl emd:text-5xl sm:text-4xl esd:text-3xl transition-colors duration-500">{title}</h1>
      {description && (
        <h2 className="text-secondary font-light text-[2.5rem] emd:text-base esd:text-lg sm:text-xl transition-colors duration-500">
          {description}
        </h2>
      )}
    </div>
  )
}
