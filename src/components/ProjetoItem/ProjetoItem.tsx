interface ProjetoItemProps {
  title: string
  type: string
}

export function ProjetoItem({ title, type }: ProjetoItemProps) {
  return (
    <>
      <div className="absolute w-full h-full bg-gradient-to-l dark:from-cyan-900 dark:to-slate-900 from-cyan-700 to-slate-700 opacity-75 duration-500 hover:opacity-40" />
      <div className="absolute top-12 right-[-10rem] w-full even:text-left even:right-0 even:left-[1rem] hover:right-[-12rem] md:left-4 md:top-4 md:even:left-4 md:even:top-4 md:even:text-left md:even:hover:left-[1rem] transition-colors duration-500">
        <h1 className="text-slate-200 text-[2.5rem] drop-shadow-md sm:text-2xl transition-colors duration-500">
          {title}
        </h1>
        <h2 className="text-slate-200 text-[2rem] font-light drop-shadow-md sm:text-base transition-colors duration-500">
          - {type}
        </h2>
      </div>
    </>
  )
}
