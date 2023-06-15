import Image from 'next/image'

interface SobreProps {
  title: string
  institution: string
  year: string
  image: string
  imgAlt: string
}

export function Sobre({ title, institution, year, image, imgAlt }: SobreProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-8 rounded-lg border-2 border-solid border-slate-200 bg-slate-100 px-5 py-4 dark:border-dark dark:bg-dark/60 emd:flex-col">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-black dark:text-white">
            {title}
          </h1>
          <span>{institution}</span>
          <span>{year}</span>
        </div>
        <Image
          className="rounded-lg"
          src={image}
          alt={imgAlt}
          width={96}
          height={96}
        />
      </div>
    </>
  )
}
