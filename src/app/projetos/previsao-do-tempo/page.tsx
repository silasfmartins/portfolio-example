import Head from 'next/head'
import Link from 'next/link'

import { BannerItems } from '../../../components/BannerItems'
import { Icons } from '../../../components/Icons'

import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiVite } from 'react-icons/si'

export default function Projeto() {
  return (
    <>
      <Head>
        <meta name="author" content="Silas Martins" />
        <meta
          name="description"
          content="Essa aplicação utiliza uma API gratuita para conseguir os dados da Previsão do Tempo e depois retorna essas dados de forma visual."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="../../public/favicon.ico" type="image/x-icon" />
        <title>Portfólio | Web App de Previsão do Tempo</title>
      </Head>
      <div className="flex h-full w-full flex-col">
        <div className="relative flex h-[26rem] w-full items-end justify-start bg-[url('../assets/previsao-do-tempo.png')] bg-cover bg-no-repeat px-20 py-12 sm:h-80 sm:px-10 sm:py-8">
          <BannerItems />
        </div>
        <main className="mb-8 w-full px-20 py-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-2xl font-light text-textLight sm:text-base">
            <h1 className="font-jetBrainsMono text-5xl text-primaryLight transition-colors duration-500 dark:text-primary md:text-4xl">
              Previsão do Tempo
            </h1>
            <span className="font-jetBrainsMono text-[2rem] font-light text-secondary transition-colors duration-500 sm:text-[1.2rem]">
              Website
            </span>
          </div>
          <p className="mt-8 text-center text-2xl font-light text-black transition-colors duration-500 dark:text-textLight sm:text-base">
            Essa aplicação utiliza uma API gratuita para conseguir os dados da
            Previsão do Tempo e depois retorna essas dados de forma visual.
          </p>
          <h3 className="my-8 text-center text-4xl font-normal text-primaryLight transition-colors duration-500 dark:text-primary sm:text-xl">
            Tecnologias Utilizadas
          </h3>
          <section className="flex w-full flex-wrap items-center justify-center gap-32 sm:mt-20 sm:flex-wrap sm:gap-12 md:gap-20 emd:gap-[2.5rem]">
            <Icons title="CSS" icon={<FaCss3Alt />} />
            <Icons title="Javascript" icon={<IoLogoJavascript />} />
            <Icons title="React" icon={<FaReact />} />
            <Icons title="Vite" icon={<SiVite />} />
          </section>
          <div className="mt-8 flex items-center justify-center md:flex-col-reverse">
            <button
              className="mx-auto mt-8 flex rounded-lg border-none bg-primaryLight px-12 py-[0.8rem] transition-colors duration-500 hover:bg-primaryLight/50 dark:bg-primary dark:hover:bg-primary/50 sm:px-8 sm:py-[0.7rem]"
              type="button"
            >
              <Link
                className="text-2xl font-light uppercase text-white transition-colors duration-500 sm:text-[0.9rem]"
                href="https://github.com/silasfmartins/Web-App-de-Previsao-do-Tempo"
                target="_blank"
              >
                Ver projeto online
              </Link>
            </button>
            <button
              className="mx-auto mt-8 flex rounded-lg border-none bg-primaryLight px-12 py-[0.8rem] transition-colors duration-500 hover:bg-primaryLight/50 dark:bg-primary dark:hover:bg-primary/50 sm:px-8 sm:py-[0.7rem]"
              type="button"
            >
              <Link
                className="text-2xl font-light uppercase text-white transition-colors duration-500 sm:text-[0.9rem]"
                href="https://previsaodotempo.vercel.app/"
                target="_blank"
              >
                Ver projeto online
              </Link>
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
