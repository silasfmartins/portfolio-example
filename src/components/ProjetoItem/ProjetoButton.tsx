import Link from 'next/link'
import { ArrowRightCircle } from 'lucide-react'

interface ProjetoButtonProps {
  slug: string
}

export function ProjetoButton({ slug }: ProjetoButtonProps) {
  return (
    <>
      <button
        className="md:even:margin-0 bottom-4 right-4 m-0 mb-12 ml-20 mr-0 mt-0 h-16 cursor-pointer border-none bg-none transition-colors duration-500 even:mb-0 even:ml-8 even:mr-20 even:mt-12 sm:h-auto md:absolute md:even:absolute md:even:bottom-4 md:even:right-4"
        type="button"
      >
        <Link
          className="flex items-center gap-[0.8rem] text-[2rem] font-light text-black transition-colors duration-500 hover:text-primaryLight dark:text-white dark:hover:text-primary sm:gap-[0.8rem] sm:text-2xl"
          href={`/projetos/${slug}`}
        >
          Ver mais <ArrowRightCircle />
        </Link>
      </button>
    </>
  )
}
