import Link from 'next/link'

interface ProjetoProps {
  title: string
  type: string
  slug: string
}

export function Projeto({ title, type, slug }: ProjetoProps) {
  return (
    <>
      <Link href={`/projetos/${slug}`}>
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-l from-cyan-700 to-slate-700 opacity-70 duration-500 hover:opacity-50 dark:from-cyan-900 dark:to-slate-900" />
        <section className="z-20">
          <h1 className="text-2xl text-project dark:text-primary emd:text-base">
            {title}
          </h1>
          <h2 className="text-base font-light text-project dark:text-primary">
            {type}
          </h2>
        </section>
      </Link>
    </>
  )
}
