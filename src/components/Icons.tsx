import { ReactNode } from 'react'

interface IconsProps {
  title: string
  icon: ReactNode
}

export function Icons({ title, icon }: IconsProps) {
  return (
    <div className="group flex flex-col items-center justify-center gap-[0.8rem]">
      <p className="text-[1.3rem] text-base font-light uppercase text-secondary transition-colors group-hover:text-primaryLight dark:text-primary dark:group-hover:text-primary">
        {title}
      </p>
      <div className="mt-8 flex max-h-[6.5rem] max-w-[6.5rem] scale-405 items-center justify-center text-secondary transition-colors duration-300 hover:text-primaryLight md:h-20 md:max-h-[2.5rem] md:w-20 md:max-w-[2.5rem]">
        {icon}
      </div>
    </div>
  )
}
