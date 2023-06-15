interface ProjetoItemProps {
  title: string
  type: string
}

export function ProjetoItem({ title, type }: ProjetoItemProps) {
  return (
    <>
      <div className="absolute h-full w-full bg-gradient-to-l from-cyan-700 to-slate-700 opacity-75 duration-500 hover:opacity-40 dark:from-cyan-900 dark:to-slate-900" />
      <div className="absolute right-[-10rem] top-12 w-full transition-colors duration-500 even:left-[1rem] even:right-0 even:text-left hover:right-[-12rem] md:left-4 md:top-4 md:even:left-4 md:even:top-4 md:even:text-left md:even:hover:left-[1rem]">
        <h1 className="text-[2.5rem] text-slate-200 drop-shadow-md transition-colors duration-500 sm:text-2xl">
          {title}
        </h1>
        <h2 className="text-[2rem] font-light text-slate-200 drop-shadow-md transition-colors duration-500 sm:text-base">
          - {type}
        </h2>
      </div>
    </>
  )
}
