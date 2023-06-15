import { ReactNode } from "react"

interface IconsProps {
  title: string;
  icon: ReactNode
}

export function Icons({ title, icon }: IconsProps) {
  return (
    <div className="flex flex-col gap-[0.8rem] items-center justify-center group">
      <p className="dark:text-primary text-secondary dark:group-hover:text-primary group-hover:text-primaryLight font-light text-[1.3rem] uppercase text-base transition-colors">
        {title}
      </p>
      <div className="max-w-[6.5rem] max-h-[6.5rem] md:max-w-[2.5rem] md:max-h-[2.5rem] text-secondary duration-300 hover:text-primaryLight scale-405 flex items-center justify-center md:w-20 md:h-20 transition-colors mt-8">
        {icon}
      </div>
    </div>
  )
}