import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { SectionTitle } from '../components/SectionTitle'
import { ProjetoItem } from '../components/ProjetoItem/ProjetoItem'
import { ProjetoButton } from '../components/ProjetoItem/ProjetoButton'

import picture from '../assets/silas.png'

import { AiFillHtml5 } from 'react-icons/ai'
import {
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { GrMysql } from 'react-icons/gr'
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiPostgresql,
  SiC,
} from 'react-icons/si'

import { Sobre } from '../components/Sobre'
import { Icons } from '../components/Icons'
import { SendEmailForm } from '../components/SendEmailForm'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="author" content="Silas Martins" />
        <meta
          name="description"
          content="Website que divulga os projetos desenvolvidos por mim"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest.json" />
        <link href="../../public/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Portfólio | Silas Martins</title>
      </Head>
      <div className="flex h-full w-full flex-col bg-slate-200 transition-colors dark:bg-[#10101b]">
        <main className="mx-auto my-0 flex w-full max-w-[85rem] flex-col gap-2 px-[1rem] py-0 sm:px-[2rem] sm:py-0 md:max-w-[50rem] lg:max-w-[70rem]">
          <section
            data-aos="fade-up"
            className="mt-[5rem] flex w-full items-center justify-center gap-[2rem] px-4 sm:w-full sm:flex-col lg:flex-1"
          >
            <Image
              className="w-10 max-w-full flex-1 md:w-[20rem] lg:w-[25rem]"
              src={picture}
              alt="Minha foto"
            />
            <div className="flex-initial flex-col gap-4">
              <h1 className="text-6xl font-normal text-secondaryLight transition-colors duration-500 dark:text-secondary md:text-[2rem]">
                Silas Martins
              </h1>
              <div className="text-2xl font-light text-secondaryLight transition-colors duration-500 dark:text-secondary md:text-[1rem]">
                <span>Desenvolvedor Front End</span>
              </div>
            </div>
          </section>
          <section className="grid w-full grid-cols-2 gap-8 md:flex md:flex-col lg:px-5">
            <div className="pt-12">
              <SectionTitle data-aos="fade-up" title="# Sobre mim" />
              <div
                data-aos="fade-up"
                className="flex flex-col gap-6 py-16 md:gap-3"
              >
                <p className="text-justify text-2xl font-light text-black transition-colors duration-500 dark:text-textLight sm:text-base">
                  Atualmente eu tenho 18 anos mas, desde de pequeno acompanho o
                  universo de tecnologia e suas evoluções.
                </p>
                <p className="text-justify text-2xl font-light text-black transition-colors duration-500 dark:text-textLight sm:text-base">
                  ⁠⁠⁠⁠Comecei os meus estudos há 2 anos durante a pandemia
                  motivado pela escola. Tentei aprender sozinho e com a ajuda
                  dos professores comecei a desenvolver conhecimentos de HTML e
                  CSS. Após algumas semanas, percebi que gostava de programar,
                  por isso, investi em cursos online e evolui cada vez mais.
                  Atualmente, desenvolvo alguns projetos para aprender coisas
                  novas e posso afirmar que sou apaixonado pela área de
                  tecnologia.
                </p>
                <p className="text-justify text-2xl font-light text-black transition-colors duration-500 dark:text-textLight sm:text-base">
                  Sempre busco aumentar meus conhecimentos e almejo minha
                  primeira oportunidade sendo Desenvolvedor Front-End.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="my-auto flex w-full flex-col gap-6 py-10 md:mx-auto md:my-0 md:gap-8 md:py-0"
            >
              <Sobre
                title="Tecnólogo em Análise e Desenvolvimento de Sistemas"
                institution="Fatec Santana de Parnaíba"
                year="2023 - 2025"
                image="/fatec.png"
                imgAlt="Imagem da Fatec Santana de Parnaíba"
              />
              <Sobre
                title="Ensino Médio Técnico em Redes de Computadores"
                institution="Instituto Federal de São Paulo Campus Pirituba"
                year="2020 - 2022"
                image="/if.png"
                imgAlt="Imagem do Instituto Federal de São Paulo Campus Pirituba"
              />
            </div>
          </section>
          <section className="mt-20 flex w-full flex-col gap-16 md:gap-8 lg:px-5">
            <SectionTitle title="# Últimos projetos" />
            <div
              data-aos="fade-up"
              className="md:even-flex-row relative flex h-[25rem] w-full items-end even:flex-row-reverse sm:h-[17rem] md:justify-center"
            >
              <section className="relative h-full w-[50rem] bg-[url('../assets/conversor-de-bases.png')] bg-cover bg-center bg-no-repeat md:w-full md:even:w-full lg:w-[40rem]">
                <ProjetoItem title="Conversor de Bases" type="Website" />
              </section>
              <ProjetoButton slug="conversor-de-bases" />
            </div>
            <div
              data-aos="fade-up"
              className="md:even-flex-row relative flex h-[25rem] w-full items-end even:flex-row-reverse sm:h-[17rem] md:justify-center"
            >
              <section className="relative h-full w-[50rem] bg-[url('../assets/twitter-ui.png')] bg-cover bg-center bg-no-repeat md:w-full md:even:w-full lg:w-[40rem]">
                <ProjetoItem title="Twitter UI" type="Website" />
              </section>
              <ProjetoButton slug="twitter-ui" />
            </div>
            <div
              data-aos="fade-up"
              className="md:even-flex-row relative flex h-[25rem] w-full items-end even:flex-row-reverse sm:h-[17rem] md:justify-center"
            >
              <section className="relative h-full w-[50rem] bg-[url('../assets/lista-presenca.png')] bg-cover bg-center bg-no-repeat md:w-full md:even:w-full lg:w-[40rem]">
                <ProjetoItem title="Lista de Presença" type="Website" />
              </section>
              <ProjetoButton slug="lista-presenca" />
            </div>
            <button
              data-aos="fade-up"
              type="button"
              className="rounded-lg border-none bg-primaryLight px-12 py-[0.8rem] transition-colors duration-500 hover:bg-primaryLight/50 dark:bg-primary dark:hover:bg-primary/50 sm:p-4"
            >
              <Link
                href="/projetos"
                className="text-2xl font-light uppercase text-white sm:text-base"
              >
                Ver todos os projetos
              </Link>
            </button>
          </section>
          <section className="my-16 w-full lg:px-5">
            <SectionTitle title="# Conhecimentos" />
            <section
              data-aos="fade-up"
              className="mt-32 flex w-full flex-wrap items-center justify-center gap-32 sm:mt-20 sm:flex-wrap sm:gap-12 md:gap-20 emd:gap-[2.5rem]"
            >
              <Icons title="HTML" icon={<AiFillHtml5 />} />
              <Icons title="CSS" icon={<FaCss3Alt />} />
              <Icons title="Styled Components" icon={<SiStyledcomponents />} />
              <Icons title="TailwindCSS" icon={<SiTailwindcss />} />
              <Icons title="Javascript" icon={<IoLogoJavascript />} />
              <Icons title="Typescript" icon={<SiTypescript />} />
              <Icons title="React" icon={<FaReact />} />
              <Icons title="Node JS" icon={<FaNodeJs />} />
              <Icons title="MySql" icon={<GrMysql />} />
              <Icons title="PostgreSQL" icon={<SiPostgresql />} />
              <Icons title="Vite" icon={<SiVite />} />
              <Icons title="Next.js" icon={<SiNextdotjs />} />
              <Icons title="Git" icon={<FaGitAlt />} />
              <Icons title="Python" icon={<FaPython />} />
              <Icons title="Linguagem C" icon={<SiC />} />
            </section>
          </section>
          <div className="px-5">
            <section>
              <SectionTitle
                title={
                  <>
                    # Precisa dos
                    <br />
                    meus serviços?
                  </>
                }
                description={
                  <>
                    Preencha o formulário abaixo que
                    <br />
                    irei retornar em breve
                  </>
                }
              />
            </section>
            <SendEmailForm />
          </div>
        </main>
      </div>
    </>
  )
}
